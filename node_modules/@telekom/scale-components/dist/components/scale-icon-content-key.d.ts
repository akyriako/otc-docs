import type { Components, JSX } from "../types/components";

interface ScaleIconContentKey extends Components.ScaleIconContentKey, HTMLElement {}
export const ScaleIconContentKey: {
  prototype: ScaleIconContentKey;
  new (): ScaleIconContentKey;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
