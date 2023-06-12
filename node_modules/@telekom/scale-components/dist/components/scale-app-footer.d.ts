import type { Components, JSX } from "../types/components";

interface ScaleAppFooter extends Components.ScaleAppFooter, HTMLElement {}
export const ScaleAppFooter: {
  prototype: ScaleAppFooter;
  new (): ScaleAppFooter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
