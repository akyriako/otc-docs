import type { Components, JSX } from "../types/components";

interface ScaleLogo extends Components.ScaleLogo, HTMLElement {}
export const ScaleLogo: {
  prototype: ScaleLogo;
  new (): ScaleLogo;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
