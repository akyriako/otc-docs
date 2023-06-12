import type { Components, JSX } from "../types/components";

interface ScaleBreadcrumb extends Components.ScaleBreadcrumb, HTMLElement {}
export const ScaleBreadcrumb: {
  prototype: ScaleBreadcrumb;
  new (): ScaleBreadcrumb;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
