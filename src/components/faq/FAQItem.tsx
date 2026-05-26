import { useId, useState } from "react";

interface Props {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export default function FAQItem({ question, answer, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  const panelId = `${id}-panel`;
  const buttonId = `${id}-button`;

  return (
    <div
      className="border-b"
      style={{ borderColor: "var(--color-rule)" }}
    >
      <h3 className="m-0">
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-start justify-between gap-6 py-6 text-left"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-lg)",
            color: "var(--color-ink)",
            fontWeight: 600,
            letterSpacing: "-0.01em",
          }}
        >
          <span>{question}</span>
          <span
            aria-hidden="true"
            style={{
              flexShrink: 0,
              width: 28,
              height: 28,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "var(--radius-pill)",
              border: "1px solid var(--color-rule-strong)",
              color: "var(--color-accent-deep)",
              fontSize: 18,
              lineHeight: 1,
              transition: "transform 240ms cubic-bezier(0.22, 1, 0.36, 1)",
              transform: open ? "rotate(45deg)" : "rotate(0deg)",
            }}
          >
            +
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "grid-template-rows 320ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <p
            style={{
              paddingBottom: "1.75rem",
              color: "var(--color-ink-soft)",
              fontSize: "var(--text-base)",
              maxWidth: "62ch",
              lineHeight: 1.65,
            }}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
