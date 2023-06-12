import type { Components, JSX } from "../types/components";

interface ScaleLogoSvg extends Components.ScaleLogoSvg, HTMLElement {}
export const ScaleLogoSvg: {
  prototype: ScaleLogoSvg;
  new (): ScaleLogoSvg;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
