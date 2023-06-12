import type { Components, JSX } from "../types/components";

interface ScaleCollapsible extends Components.ScaleCollapsible, HTMLElement {}
export const ScaleCollapsible: {
  prototype: ScaleCollapsible;
  new (): ScaleCollapsible;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
