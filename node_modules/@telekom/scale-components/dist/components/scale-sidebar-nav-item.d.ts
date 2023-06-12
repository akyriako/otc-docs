import type { Components, JSX } from "../types/components";

interface ScaleSidebarNavItem extends Components.ScaleSidebarNavItem, HTMLElement {}
export const ScaleSidebarNavItem: {
  prototype: ScaleSidebarNavItem;
  new (): ScaleSidebarNavItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
