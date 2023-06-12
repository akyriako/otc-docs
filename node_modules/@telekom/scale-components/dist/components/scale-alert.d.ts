import type { Components, JSX } from "../types/components";

interface ScaleAlert extends Components.ScaleAlert, HTMLElement {}
export const ScaleAlert: {
  prototype: ScaleAlert;
  new (): ScaleAlert;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
