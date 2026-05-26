import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { startPayment, type PaymentPhase } from "@lib/payments";

interface Props {
  open: boolean;
  onClose: () => void;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[6-9]\d{9}$/;

export default function PayDemoModal({ open, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});
  const [phase, setPhase] = useState<PaymentPhase>("idle");
  const [statusMsg, setStatusMsg] = useState<string | null>(null);

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    if (open && !dlg.open) {
      dlg.showModal();
      setStatusMsg(null);
    } else if (!open && dlg.open) {
      dlg.close();
    }
  }, [open]);

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    const onCancel = (e: Event) => {
      if (phase !== "idle") {
        e.preventDefault();
        return;
      }
      onClose();
    };
    const onClickBackdrop = (e: MouseEvent) => {
      if (e.target === dlg && phase === "idle") onClose();
    };
    dlg.addEventListener("cancel", onCancel);
    dlg.addEventListener("click", onClickBackdrop);
    return () => {
      dlg.removeEventListener("cancel", onCancel);
      dlg.removeEventListener("click", onClickBackdrop);
    };
  }, [onClose, phase]);

  const busy = phase !== "idle";
  const buttonLabel =
    phase === "ordering" ? "Creating order…"
    : phase === "verifying" ? "Confirming payment…"
    : "Pay ₹99";

  function validate() {
    const next: typeof errors = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!EMAIL_RE.test(email.trim())) next.email = "Please enter a valid email.";
    const digits = phone.replace(/\D/g, "").slice(-10);
    if (!PHONE_RE.test(digits)) next.phone = "Please enter a 10-digit Indian mobile number.";
    setErrors(next);
    return Object.keys(next).length === 0 ? { digits } : null;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const ok = validate();
    if (!ok) return;
    setStatusMsg(null);
    await startPayment({
      amount: 99,
      customer: { name: name.trim(), email: email.trim(), contact: ok.digits },
      description: "Demo class — Logic Labs Cohort 01",
      metadata: { product: "demo-class", cohort: "logic-labs-01" },
      onPhaseChange: setPhase,
      onError: setStatusMsg,
    });
  }

  return (
    <dialog
      ref={dialogRef}
      className="pay-demo-dialog"
      aria-labelledby={`${nameId}-title`}
      style={{
        border: "none",
        padding: 0,
        background: "transparent",
        maxWidth: "min(440px, calc(100vw - 2rem))",
        width: "100%",
      }}
    >
      <form
        method="dialog"
        onSubmit={onSubmit}
        style={{
          background: "var(--color-paper)",
          color: "var(--color-ink)",
          borderRadius: "var(--radius-xl)",
          border: "1px solid var(--color-rule)",
          padding: "1.75rem",
          boxShadow:
            "0 30px 80px -30px color-mix(in oklch, var(--color-ink) 50%, transparent), 0 8px 24px -12px color-mix(in oklch, var(--color-ink) 30%, transparent)",
          fontFamily: "var(--font-body)",
        }}
      >
        <div className="flex items-start justify-between gap-4">
          <h2
            id={`${nameId}-title`}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-2xl)",
              letterSpacing: "-0.02em",
              fontWeight: 600,
              margin: 0,
            }}
          >
            Book the demo class
          </h2>
          <button
            type="button"
            onClick={() => {
              if (!busy) onClose();
            }}
            disabled={busy}
            aria-label="Close"
            style={{
              border: "1px solid var(--color-rule)",
              background: "transparent",
              borderRadius: "var(--radius-pill)",
              width: 32,
              height: 32,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: busy ? "not-allowed" : "pointer",
              color: "var(--color-ink-mute)",
              fontSize: 18,
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>

        <p
          style={{
            marginTop: "0.5rem",
            color: "var(--color-ink-mute)",
            fontSize: "var(--text-sm)",
            lineHeight: 1.55,
          }}
        >
          ₹99 · A live look at the cohort before you commit to the full ₹19,999.
        </p>

        <div style={{ marginTop: "1.25rem", display: "grid", gap: "0.9rem" }}>
          <Field
            id={nameId}
            label="Parent or student name"
            value={name}
            onChange={setName}
            error={errors.name}
            disabled={busy}
            autoComplete="name"
          />
          <Field
            id={emailId}
            label="Email"
            type="email"
            value={email}
            onChange={setEmail}
            error={errors.email}
            disabled={busy}
            autoComplete="email"
          />
          <Field
            id={phoneId}
            label="Mobile number"
            type="tel"
            value={phone}
            onChange={setPhone}
            error={errors.phone}
            disabled={busy}
            autoComplete="tel"
            inputMode="numeric"
            placeholder="10-digit Indian number"
          />
        </div>

        {statusMsg && (
          <p
            role="status"
            style={{
              marginTop: "1rem",
              padding: "0.65rem 0.85rem",
              borderRadius: "var(--radius-md)",
              background: "color-mix(in oklch, var(--color-warn) 12%, transparent)",
              color: "color-mix(in oklch, var(--color-warn) 90%, black)",
              fontSize: "var(--text-sm)",
              lineHeight: 1.5,
            }}
          >
            {statusMsg}
          </p>
        )}

        <button
          type="submit"
          className="btn btn-accent"
          disabled={busy}
          style={{
            marginTop: "1.25rem",
            width: "100%",
            justifyContent: "center",
            opacity: busy ? 0.75 : 1,
            cursor: busy ? "progress" : "pointer",
          }}
        >
          {buttonLabel}
        </button>

        <p
          style={{
            marginTop: "0.85rem",
            color: "var(--color-ink-mute)",
            fontSize: "var(--text-xs)",
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          Payments are secured by Razorpay. Card, UPI, and netbanking accepted.
        </p>
      </form>
    </dialog>
  );
}

interface FieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  error?: string;
  disabled?: boolean;
  autoComplete?: string;
  inputMode?: "numeric" | "text" | "email" | "tel";
  placeholder?: string;
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  error,
  disabled,
  autoComplete,
  inputMode,
  placeholder,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        style={{
          display: "block",
          fontSize: "var(--text-xs)",
          color: "var(--color-ink-mute)",
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginBottom: "0.35rem",
        }}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        autoComplete={autoComplete}
        inputMode={inputMode}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-err` : undefined}
        style={{
          width: "100%",
          padding: "0.7rem 0.85rem",
          borderRadius: "var(--radius-md)",
          border: `1px solid ${error ? "var(--color-warn)" : "var(--color-rule-strong)"}`,
          background: "var(--color-paper-soft)",
          color: "var(--color-ink)",
          fontSize: "var(--text-base)",
          fontFamily: "inherit",
          outline: "none",
        }}
      />
      {error && (
        <p
          id={`${id}-err`}
          style={{
            marginTop: "0.3rem",
            color: "color-mix(in oklch, var(--color-warn) 90%, black)",
            fontSize: "var(--text-xs)",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}
