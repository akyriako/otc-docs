import type { Components, JSX } from "../types/components";

interface ScaleToggleGroup extends Components.ScaleToggleGroup, HTMLElement {}
export const ScaleToggleGroup: {
  prototype: ScaleToggleGroup;
  new (): ScaleToggleGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
