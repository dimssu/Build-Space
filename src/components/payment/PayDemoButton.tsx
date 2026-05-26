import { useState } from "react";
import PayDemoModal from "./PayDemoModal";

type Variant = "accent" | "primary" | "secondary";

interface Props {
  label: string;
  variant?: Variant;
  fontSize?: string;
}

export default function PayDemoButton({ label, variant = "accent", fontSize }: Props) {
  const [open, setOpen] = useState(false);
  const cls = variant === "primary" ? "btn btn-primary"
    : variant === "secondary" ? "btn btn-secondary"
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
      <PayDemoModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
