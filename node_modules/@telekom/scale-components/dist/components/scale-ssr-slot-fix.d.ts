import type { Components, JSX } from "../types/components";

interface ScaleSsrSlotFix extends Components.ScaleSsrSlotFix, HTMLElement {}
export const ScaleSsrSlotFix: {
  prototype: ScaleSsrSlotFix;
  new (): ScaleSsrSlotFix;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
