import type { Components, JSX } from "../types/components";

interface ScaleTabHeader extends Components.ScaleTabHeader, HTMLElement {}
export const ScaleTabHeader: {
  prototype: ScaleTabHeader;
  new (): ScaleTabHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
