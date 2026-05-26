declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

interface RazorpayOptions {
  key: string;
  order_id: string;
  amount: number;
  currency: string;
  name: string;
  description?: string;
  prefill?: { name?: string; email?: string; contact?: string };
  theme?: { color?: string };
  modal?: { ondismiss?: () => void };
  handler?: (resp: RazorpayHandlerResponse) => void | Promise<void>;
}

interface RazorpayHandlerResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

interface RazorpayInstance {
  open: () => void;
  on: (event: "payment.failed", cb: (e: { error: { description?: string } }) => void) => void;
}

interface CreateOrderResponse {
  order_id: string;
  key_id: string;
  amount: number;
  currency: string;
  receipt?: string;
  source_id: string;
}

export type PaymentPhase = "idle" | "ordering" | "checkout" | "verifying";

export interface StartPaymentInput {
  amount: number;
  customer: { name: string; email: string; contact: string };
  description?: string;
  metadata?: Record<string, unknown>;
  onPhaseChange?: (phase: PaymentPhase) => void;
  onError?: (message: string) => void;
}

const SOURCE_ID = "buildspace";
const BRAND_COLOR = "#4A8FE1";

function apiBase(): string {
  const base = import.meta.env.PUBLIC_PAYMENT_API_BASE_URL;
  if (!base) {
    throw new Error(
      "PUBLIC_PAYMENT_API_BASE_URL is not set — add it to .env.local or your deploy env."
    );
  }
  return base.replace(/\/$/, "");
}

async function readError(res: Response): Promise<string> {
  try {
    const body = (await res.json()) as { message?: string; error?: string };
    return body.message || body.error || `HTTP ${res.status}`;
  } catch {
    return `HTTP ${res.status}`;
  }
}

export async function startPayment(input: StartPaymentInput): Promise<void> {
  const { amount, customer, description, metadata, onPhaseChange, onError } = input;

  if (typeof window === "undefined" || !window.Razorpay) {
    onError?.("Payment library not ready. Please refresh and try again.");
    return;
  }

  onPhaseChange?.("ordering");

  let order: CreateOrderResponse;
  try {
    const res = await fetch(`${apiBase()}/api/payments/create-order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source_id: SOURCE_ID,
        amount,
        currency: "INR",
        customer,
        metadata,
      }),
    });
    if (!res.ok) {
      onPhaseChange?.("idle");
      onError?.(await readError(res));
      return;
    }
    order = (await res.json()) as CreateOrderResponse;
  } catch (err) {
    onPhaseChange?.("idle");
    onError?.(err instanceof Error ? err.message : "Could not start payment.");
    return;
  }

  const rzp = new window.Razorpay({
    key: order.key_id,
    order_id: order.order_id,
    amount: order.amount,
    currency: order.currency,
    name: "Build Space",
    description: description ?? "Demo class — Logic Labs Cohort 01",
    prefill: {
      name: customer.name,
      email: customer.email,
      contact: customer.contact,
    },
    theme: { color: BRAND_COLOR },
    modal: {
      ondismiss: () => {
        onPhaseChange?.("idle");
        onError?.("Payment cancelled — no charge.");
      },
    },
    handler: async (resp) => {
      onPhaseChange?.("verifying");
      try {
        const verifyRes = await fetch(`${apiBase()}/api/payments/verify`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            source_id: SOURCE_ID,
            razorpay_order_id: resp.razorpay_order_id,
            razorpay_payment_id: resp.razorpay_payment_id,
            razorpay_signature: resp.razorpay_signature,
          }),
        });
        const verify = (await verifyRes.json().catch(() => ({}))) as {
          verified?: boolean;
          message?: string;
        };
        if (verifyRes.ok && verify.verified) {
          window.location.assign(`/success?order_id=${encodeURIComponent(order.order_id)}`);
          return;
        }
        onPhaseChange?.("idle");
        onError?.(verify.message || "We could not verify the payment. If your card was charged, please contact us.");
      } catch (err) {
        onPhaseChange?.("idle");
        onError?.(err instanceof Error ? err.message : "Verification failed.");
      }
    },
  });

  rzp.on("payment.failed", (e) => {
    onPhaseChange?.("idle");
    onError?.(e.error.description || "Payment failed. Please try again.");
  });

  onPhaseChange?.("checkout");
  rzp.open();
}
