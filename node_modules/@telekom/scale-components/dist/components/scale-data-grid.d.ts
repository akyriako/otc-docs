import type { Components, JSX } from "../types/components";

interface ScaleDataGrid extends Components.ScaleDataGrid, HTMLElement {}
export const ScaleDataGrid: {
  prototype: ScaleDataGrid;
  new (): ScaleDataGrid;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
