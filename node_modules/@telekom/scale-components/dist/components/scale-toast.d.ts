import type { Components, JSX } from "../types/components";

interface ScaleToast extends Components.ScaleToast, HTMLElement {}
export const ScaleToast: {
  prototype: ScaleToast;
  new (): ScaleToast;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
