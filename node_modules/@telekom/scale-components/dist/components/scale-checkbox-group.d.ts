import type { Components, JSX } from "../types/components";

interface ScaleCheckboxGroup extends Components.ScaleCheckboxGroup, HTMLElement {}
export const ScaleCheckboxGroup: {
  prototype: ScaleCheckboxGroup;
  new (): ScaleCheckboxGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
