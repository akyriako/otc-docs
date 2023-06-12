import type { Components, JSX } from "../types/components";

interface ScaleSidebarNav extends Components.ScaleSidebarNav, HTMLElement {}
export const ScaleSidebarNav: {
  prototype: ScaleSidebarNav;
  new (): ScaleSidebarNav;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
