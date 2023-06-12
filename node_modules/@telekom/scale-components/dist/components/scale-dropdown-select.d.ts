import type { Components, JSX } from "../types/components";

interface ScaleDropdownSelect extends Components.ScaleDropdownSelect, HTMLElement {}
export const ScaleDropdownSelect: {
  prototype: ScaleDropdownSelect;
  new (): ScaleDropdownSelect;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
