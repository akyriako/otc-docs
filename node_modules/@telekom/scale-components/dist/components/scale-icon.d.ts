import type { Components, JSX } from "../types/components";

interface ScaleIcon extends Components.ScaleIcon, HTMLElement {}
export const ScaleIcon: {
  prototype: ScaleIcon;
  new (): ScaleIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
