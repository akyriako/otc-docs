import type { Components, JSX } from "../types/components";

interface ScaleTextField extends Components.ScaleTextField, HTMLElement {}
export const ScaleTextField: {
  prototype: ScaleTextField;
  new (): ScaleTextField;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
