import { useState } from "react";
import PayDemoModal from "./PayDemoModal";

type ButtonKind = "accent" | "primary" | "secondary";

interface Props {
  label: string;
  // Visual button style (renamed from `variant` to avoid colliding with the
  // ad-variant slug we now thread through).
  kind?: ButtonKind;
  fontSize?: string;
  // The ad-variant slug. Forwarded to PayDemoModal so the modal can pull copy
  // from the variant and tag the Razorpay order with `ad_variant`.
  variant?: string;
}

export default function PayDemoButton({ label, kind = "accent", fontSize, variant = "default" }: Props) {
  const [open, setOpen] = useState(false);
  const cls = kind === "primary" ? "btn btn-primary"
    : kind === "secondary" ? "btn btn-secondary"
    : "btn btn-accent";

  return (
    <>
      <button
        type="button"
        className={cls}
        style={fontSize ? { fontSize } : undefined}
        onClick={() => setOpen(true)}
      >
        {label}
      </button>
      <PayDemoModal open={open} onClose={() => setOpen(false)} variantSlug={variant} />
    </>
  );
}
