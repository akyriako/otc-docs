import type { Components, JSX } from "../types/components";

interface ScaleTabNav extends Components.ScaleTabNav, HTMLElement {}
export const ScaleTabNav: {
  prototype: ScaleTabNav;
  new (): ScaleTabNav;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
