import type { Components, JSX } from "../types/components";

interface ScaleLink extends Components.ScaleLink, HTMLElement {}
export const ScaleLink: {
  prototype: ScaleLink;
  new (): ScaleLink;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
