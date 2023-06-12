import type { Components, JSX } from "../types/components";

interface ScaleDatePicker extends Components.ScaleDatePicker, HTMLElement {}
export const ScaleDatePicker: {
  prototype: ScaleDatePicker;
  new (): ScaleDatePicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
