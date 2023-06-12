import type { Components, JSX } from "../types/components";

interface ScaleChip extends Components.ScaleChip, HTMLElement {}
export const ScaleChip: {
  prototype: ScaleChip;
  new (): ScaleChip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
