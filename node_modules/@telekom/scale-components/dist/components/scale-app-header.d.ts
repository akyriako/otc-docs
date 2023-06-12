import type { Components, JSX } from "../types/components";

interface ScaleAppHeader extends Components.ScaleAppHeader, HTMLElement {}
export const ScaleAppHeader: {
  prototype: ScaleAppHeader;
  new (): ScaleAppHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
