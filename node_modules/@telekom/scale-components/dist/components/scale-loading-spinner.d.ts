import type { Components, JSX } from "../types/components";

interface ScaleLoadingSpinner extends Components.ScaleLoadingSpinner, HTMLElement {}
export const ScaleLoadingSpinner: {
  prototype: ScaleLoadingSpinner;
  new (): ScaleLoadingSpinner;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
