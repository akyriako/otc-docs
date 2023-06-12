import type { Components, JSX } from "../types/components";

interface ScaleTooltip extends Components.ScaleTooltip, HTMLElement {}
export const ScaleTooltip: {
  prototype: ScaleTooltip;
  new (): ScaleTooltip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
