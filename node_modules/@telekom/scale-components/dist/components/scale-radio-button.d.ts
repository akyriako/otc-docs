import type { Components, JSX } from "../types/components";

interface ScaleRadioButton extends Components.ScaleRadioButton, HTMLElement {}
export const ScaleRadioButton: {
  prototype: ScaleRadioButton;
  new (): ScaleRadioButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
