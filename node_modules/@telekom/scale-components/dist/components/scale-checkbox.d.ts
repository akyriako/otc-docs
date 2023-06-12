import type { Components, JSX } from "../types/components";

interface ScaleCheckbox extends Components.ScaleCheckbox, HTMLElement {}
export const ScaleCheckbox: {
  prototype: ScaleCheckbox;
  new (): ScaleCheckbox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
