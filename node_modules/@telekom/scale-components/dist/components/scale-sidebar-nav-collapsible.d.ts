import type { Components, JSX } from "../types/components";

interface ScaleSidebarNavCollapsible extends Components.ScaleSidebarNavCollapsible, HTMLElement {}
export const ScaleSidebarNavCollapsible: {
  prototype: ScaleSidebarNavCollapsible;
  new (): ScaleSidebarNavCollapsible;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
