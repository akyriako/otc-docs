import type { Components, JSX } from "../types/components";

interface ScaleListItem extends Components.ScaleListItem, HTMLElement {}
export const ScaleListItem: {
  prototype: ScaleListItem;
  new (): ScaleListItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
