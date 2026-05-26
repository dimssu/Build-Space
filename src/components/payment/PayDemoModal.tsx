import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { startPayment, type PaymentPhase } from "@lib/payments";

interface Props {
  open: boolean;
  onClose: () => void;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[6-9]\d{9}$/;

export default function PayDemoModal({ open, onClose }: Props) {
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const titleId = `${nameId}-title`;
  const firstFieldRef = useRef<HTMLInputElement | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});
  const [phase, setPhase] = useState<PaymentPhase>("idle");
  const [statusMsg, setStatusMsg] = useState<string | null>(null);

  // Lock body scroll + autofocus the first field when the overlay is visible.
  // Hidden during "checkout" (Razorpay's own modal owns the screen) and "verifying".
  const visible = open && phase !== "checkout" && phase !== "verifying";

  useEffect(() => {
    if (!visible) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => firstFieldRef.current?.focus(), 30);
    return () => {
      document.body.style.overflow = prev;
      window.clearTimeout(t);
    };
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && phase === "idle") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible, phase, onClose]);

  // Reset transient state when the modal closes fully.
  useEffect(() => {
    if (!open) {
      setStatusMsg(null);
      setErrors({});
      setPhase("idle");
    }
  }, [open]);

  if (!open) return null;

  const busy = phase !== "idle";
  const buttonLabel =
    phase === "ordering" ? "Creating order…"
    : phase === "checkout" ? "Opening checkout…"
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

  function onBackdropClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget && phase === "idle") onClose();
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onBackdropClick}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: visible ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        background: "color-mix(in oklch, var(--color-ink) 55%, transparent)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        animation: "pay-demo-fade 160ms ease-out",
      }}
    >
      <form
        onSubmit={onSubmit}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: 440,
          maxHeight: "calc(100dvh - 2rem)",
          overflowY: "auto",
          background: "var(--color-paper)",
          color: "var(--color-ink)",
          borderRadius: "var(--radius-xl)",
          border: "1px solid var(--color-rule)",
          padding: "1.75rem",
          boxShadow:
            "0 30px 80px -30px color-mix(in oklch, var(--color-ink) 55%, transparent), 0 8px 24px -12px color-mix(in oklch, var(--color-ink) 30%, transparent)",
          fontFamily: "var(--font-body)",
          animation: "pay-demo-pop 200ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
          <h2
            id={titleId}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-2xl)",
              letterSpacing: "-0.02em",
              fontWeight: 600,
              margin: 0,
              lineHeight: 1.15,
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
              flexShrink: 0,
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
          ₹99 · A live look at the cohort before you commit to ₹19,999.
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
            inputRef={firstFieldRef}
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

      <style>{`
        @keyframes pay-demo-fade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes pay-demo-pop {
          from { opacity: 0; transform: translateY(8px) scale(0.985); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes pay-demo-fade { from, to { opacity: 1; } }
          @keyframes pay-demo-pop  { from, to { opacity: 1; transform: none; } }
        }
      `}</style>
    </div>
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
  inputRef?: React.Ref<HTMLInputElement>;
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
  inputRef,
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
        ref={inputRef}
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
          boxSizing: "border-box",
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
