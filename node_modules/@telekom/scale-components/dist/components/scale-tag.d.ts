import type { Components, JSX } from "../types/components";

interface ScaleTag extends Components.ScaleTag, HTMLElement {}
export const ScaleTag: {
  prototype: ScaleTag;
  new (): ScaleTag;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
