import type { Components, JSX } from "../types/components";

interface ScaleTextarea extends Components.ScaleTextarea, HTMLElement {}
export const ScaleTextarea: {
  prototype: ScaleTextarea;
  new (): ScaleTextarea;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
