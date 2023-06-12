import type { Components, JSX } from "../types/components";

interface ScaleTable extends Components.ScaleTable, HTMLElement {}
export const ScaleTable: {
  prototype: ScaleTable;
  new (): ScaleTable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
