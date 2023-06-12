import type { Components, JSX } from "../types/components";

interface ScaleDropdown extends Components.ScaleDropdown, HTMLElement {}
export const ScaleDropdown: {
  prototype: ScaleDropdown;
  new (): ScaleDropdown;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
