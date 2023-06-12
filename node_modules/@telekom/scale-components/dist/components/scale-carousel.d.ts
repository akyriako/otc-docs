import type { Components, JSX } from "../types/components";

interface ScaleCarousel extends Components.ScaleCarousel, HTMLElement {}
export const ScaleCarousel: {
  prototype: ScaleCarousel;
  new (): ScaleCarousel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
