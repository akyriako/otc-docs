import type { Components, JSX } from "../types/components";

interface ScaleMenuFlyout extends Components.ScaleMenuFlyout, HTMLElement {}
export const ScaleMenuFlyout: {
  prototype: ScaleMenuFlyout;
  new (): ScaleMenuFlyout;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
