import type { Components, JSX } from "../types/components";

interface ScaleSwitch extends Components.ScaleSwitch, HTMLElement {}
export const ScaleSwitch: {
  prototype: ScaleSwitch;
  new (): ScaleSwitch;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
