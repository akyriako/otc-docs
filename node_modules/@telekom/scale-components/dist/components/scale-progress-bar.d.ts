import type { Components, JSX } from "../types/components";

interface ScaleProgressBar extends Components.ScaleProgressBar, HTMLElement {}
export const ScaleProgressBar: {
  prototype: ScaleProgressBar;
  new (): ScaleProgressBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
