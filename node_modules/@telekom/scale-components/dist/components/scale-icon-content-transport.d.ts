import type { Components, JSX } from "../types/components";

interface ScaleIconContentTransport extends Components.ScaleIconContentTransport, HTMLElement {}
export const ScaleIconContentTransport: {
  prototype: ScaleIconContentTransport;
  new (): ScaleIconContentTransport;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
