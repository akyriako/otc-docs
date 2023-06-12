import type { Components, JSX } from "../types/components";

interface ScaleDropdownSelectItem extends Components.ScaleDropdownSelectItem, HTMLElement {}
export const ScaleDropdownSelectItem: {
  prototype: ScaleDropdownSelectItem;
  new (): ScaleDropdownSelectItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
