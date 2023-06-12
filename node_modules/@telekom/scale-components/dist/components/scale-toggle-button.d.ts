import type { Components, JSX } from "../types/components";

interface ScaleToggleButton extends Components.ScaleToggleButton, HTMLElement {}
export const ScaleToggleButton: {
  prototype: ScaleToggleButton;
  new (): ScaleToggleButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
