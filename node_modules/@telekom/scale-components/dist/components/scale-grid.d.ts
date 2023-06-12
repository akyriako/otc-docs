import type { Components, JSX } from "../types/components";

interface ScaleGrid extends Components.ScaleGrid, HTMLElement {}
export const ScaleGrid: {
  prototype: ScaleGrid;
  new (): ScaleGrid;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
