import type { Components, JSX } from "../types/components";

interface ScaleCallout extends Components.ScaleCallout, HTMLElement {}
export const ScaleCallout: {
  prototype: ScaleCallout;
  new (): ScaleCallout;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
