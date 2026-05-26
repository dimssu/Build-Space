import type { Variant, AdSlug, PartialVariant } from "./types";
import { defaultVariant } from "./default";
import { class11HiVariant } from "./class11-hi";
import { class12ParentVariant } from "./class12-parent";
import { class10CuriousVariant } from "./class10-curious";
import { parentProudVariant } from "./parent-proud";
import { tutorialDropoutVariant } from "./tutorial-dropout";

// Static registry of all variants. Each non-default entry is a PartialVariant —
// only the fields that diverge from default. `getVariant()` merges them on read.
const variants: Record<AdSlug, PartialVariant | Variant> = {
  default: defaultVariant,
  "class11-hi": class11HiVariant,
  "class12-parent": class12ParentVariant,
  "class10-curious": class10CuriousVariant,
  "parent-proud": parentProudVariant,
  "tutorial-dropout": tutorialDropoutVariant,
};

export function registerVariant(v: PartialVariant): void {
  variants[v.slug] = v;
}

// Deep-merge helper: variant overrides default, but only for fields explicitly set.
function mergeVariant(base: Variant, override: PartialVariant): Variant {
  const out: Variant = { ...base, slug: override.slug };
  for (const key of Object.keys(override) as (keyof PartialVariant)[]) {
    if (key === "slug") continue;
    const ov = (override as any)[key];
    const bv = (base as any)[key];
    if (ov === undefined) continue;
    if (
      ov !== null &&
      typeof ov === "object" &&
      !Array.isArray(ov) &&
      bv !== null &&
      typeof bv === "object" &&
      !Array.isArray(bv)
    ) {
      (out as any)[key] = { ...bv, ...ov };
    } else {
      (out as any)[key] = ov;
    }
  }
  return out;
}

export function getVariant(slug: string | null | undefined): Variant {
  const safe = (slug ?? "default") as AdSlug;
  const raw = variants[safe];
  if (!raw) return defaultVariant;
  if (raw === defaultVariant) return defaultVariant;
  return mergeVariant(defaultVariant, raw as PartialVariant);
}

export function listVariantSlugs(): AdSlug[] {
  return Object.keys(variants) as AdSlug[];
}

export { defaultVariant };
export type { Variant, AdSlug, PartialVariant } from "./types";
