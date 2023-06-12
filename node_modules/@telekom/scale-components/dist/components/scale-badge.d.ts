import type { Components, JSX } from "../types/components";

interface ScaleBadge extends Components.ScaleBadge, HTMLElement {}
export const ScaleBadge: {
  prototype: ScaleBadge;
  new (): ScaleBadge;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
