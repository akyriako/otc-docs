import type { Components, JSX } from "../types/components";

interface ScaleSlider extends Components.ScaleSlider, HTMLElement {}
export const ScaleSlider: {
  prototype: ScaleSlider;
  new (): ScaleSlider;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
