import type { Components, JSX } from "../types/components";

interface ScaleMenuFlyoutItem extends Components.ScaleMenuFlyoutItem, HTMLElement {}
export const ScaleMenuFlyoutItem: {
  prototype: ScaleMenuFlyoutItem;
  new (): ScaleMenuFlyoutItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
