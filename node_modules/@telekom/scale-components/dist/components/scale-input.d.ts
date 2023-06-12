import type { Components, JSX } from "../types/components";

interface ScaleInput extends Components.ScaleInput, HTMLElement {}
export const ScaleInput: {
  prototype: ScaleInput;
  new (): ScaleInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
