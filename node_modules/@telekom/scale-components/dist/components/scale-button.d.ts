import type { Components, JSX } from "../types/components";

interface ScaleButton extends Components.ScaleButton, HTMLElement {}
export const ScaleButton: {
  prototype: ScaleButton;
  new (): ScaleButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
