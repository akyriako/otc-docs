import type { Components, JSX } from "../types/components";

interface ScaleNavSegment extends Components.ScaleNavSegment, HTMLElement {}
export const ScaleNavSegment: {
  prototype: ScaleNavSegment;
  new (): ScaleNavSegment;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
