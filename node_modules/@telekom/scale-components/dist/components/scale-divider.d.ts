import type { Components, JSX } from "../types/components";

interface ScaleDivider extends Components.ScaleDivider, HTMLElement {}
export const ScaleDivider: {
  prototype: ScaleDivider;
  new (): ScaleDivider;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
