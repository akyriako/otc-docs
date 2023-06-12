import type { Components, JSX } from "../types/components";

interface ScaleList extends Components.ScaleList, HTMLElement {}
export const ScaleList: {
  prototype: ScaleList;
  new (): ScaleList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
