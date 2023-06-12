import type { Components, JSX } from "../types/components";

interface ScaleNavIcon extends Components.ScaleNavIcon, HTMLElement {}
export const ScaleNavIcon: {
  prototype: ScaleNavIcon;
  new (): ScaleNavIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
