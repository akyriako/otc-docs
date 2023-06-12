import type { Components, JSX } from "../types/components";

interface ScaleGridItem extends Components.ScaleGridItem, HTMLElement {}
export const ScaleGridItem: {
  prototype: ScaleGridItem;
  new (): ScaleGridItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
