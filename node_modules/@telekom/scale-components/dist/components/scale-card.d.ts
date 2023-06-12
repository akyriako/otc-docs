import type { Components, JSX } from "../types/components";

interface ScaleCard extends Components.ScaleCard, HTMLElement {}
export const ScaleCard: {
  prototype: ScaleCard;
  new (): ScaleCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
