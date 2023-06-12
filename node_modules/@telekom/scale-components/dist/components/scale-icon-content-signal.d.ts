import type { Components, JSX } from "../types/components";

interface ScaleIconContentSignal extends Components.ScaleIconContentSignal, HTMLElement {}
export const ScaleIconContentSignal: {
  prototype: ScaleIconContentSignal;
  new (): ScaleIconContentSignal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
