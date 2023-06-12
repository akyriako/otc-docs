import type { Components, JSX } from "../types/components";

interface ScaleHelperText extends Components.ScaleHelperText, HTMLElement {}
export const ScaleHelperText: {
  prototype: ScaleHelperText;
  new (): ScaleHelperText;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
