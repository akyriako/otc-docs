import type { Components, JSX } from "../types/components";

interface ScalePagination extends Components.ScalePagination, HTMLElement {}
export const ScalePagination: {
  prototype: ScalePagination;
  new (): ScalePagination;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
