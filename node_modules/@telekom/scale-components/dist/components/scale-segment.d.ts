import type { Components, JSX } from "../types/components";

interface ScaleSegment extends Components.ScaleSegment, HTMLElement {}
export const ScaleSegment: {
  prototype: ScaleSegment;
  new (): ScaleSegment;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
