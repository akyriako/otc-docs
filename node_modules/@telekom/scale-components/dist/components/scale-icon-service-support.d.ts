import type { Components, JSX } from "../types/components";

interface ScaleIconServiceSupport extends Components.ScaleIconServiceSupport, HTMLElement {}
export const ScaleIconServiceSupport: {
  prototype: ScaleIconServiceSupport;
  new (): ScaleIconServiceSupport;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
