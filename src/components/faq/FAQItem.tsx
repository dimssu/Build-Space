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
      className="faq-card"
      data-open={open ? "true" : "false"}
      style={{
        borderRadius: "var(--radius-lg)",
        border: "1px solid var(--color-rule)",
        // Mix in sRGB rather than OKLCH — OKLCH polar-hue interpolation
        // between blue (245°) and warm-white (80°) goes through green
        // (~142°) which produces a muddy neutral. sRGB interpolation gives
        // a clean accent-blue tint instead.
        background: open
          ? "color-mix(in srgb, var(--color-accent-soft) 65%, var(--color-paper))"
          : "var(--color-paper)",
        borderColor: open
          ? "color-mix(in srgb, var(--color-accent) 45%, var(--color-rule))"
          : "var(--color-rule)",
        boxShadow: open
          ? "0 10px 26px -18px color-mix(in srgb, var(--color-accent) 45%, transparent)"
          : "none",
        transition:
          "background 220ms cubic-bezier(0.22, 1, 0.36, 1), border-color 220ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 220ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      <h3 className="m-0">
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-start justify-between gap-5 text-left"
          style={{
            padding: "1.1rem 1.25rem",
            fontFamily: "var(--font-display)",
            fontSize: "1.0625rem",
            color: "var(--color-ink)",
            fontWeight: 600,
            letterSpacing: "-0.005em",
            lineHeight: 1.35,
            cursor: "pointer",
          }}
        >
          <span>{question}</span>
          <span
            aria-hidden="true"
            style={{
              flexShrink: 0,
              width: 32,
              height: 32,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "var(--radius-pill)",
              border: `1px solid ${open ? "var(--color-accent)" : "var(--color-rule-strong)"}`,
              background: open ? "var(--color-accent)" : "var(--color-paper)",
              color: open ? "var(--color-paper)" : "var(--color-accent-deep)",
              fontSize: 18,
              fontWeight: 500,
              lineHeight: 1,
              marginTop: 2,
              transition:
                "transform 240ms cubic-bezier(0.22, 1, 0.36, 1), background 220ms cubic-bezier(0.22, 1, 0.36, 1), color 220ms cubic-bezier(0.22, 1, 0.36, 1), border-color 220ms cubic-bezier(0.22, 1, 0.36, 1)",
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
              padding: "0 1.25rem 1.25rem",
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
