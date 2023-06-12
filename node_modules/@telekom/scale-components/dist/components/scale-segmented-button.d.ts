import type { Components, JSX } from "../types/components";

interface ScaleSegmentedButton extends Components.ScaleSegmentedButton, HTMLElement {}
export const ScaleSegmentedButton: {
  prototype: ScaleSegmentedButton;
  new (): ScaleSegmentedButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
