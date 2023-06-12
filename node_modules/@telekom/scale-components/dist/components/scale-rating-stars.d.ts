import type { Components, JSX } from "../types/components";

interface ScaleRatingStars extends Components.ScaleRatingStars, HTMLElement {}
export const ScaleRatingStars: {
  prototype: ScaleRatingStars;
  new (): ScaleRatingStars;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
