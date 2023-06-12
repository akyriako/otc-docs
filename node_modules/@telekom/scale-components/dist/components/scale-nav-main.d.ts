import type { Components, JSX } from "../types/components";

interface ScaleNavMain extends Components.ScaleNavMain, HTMLElement {}
export const ScaleNavMain: {
  prototype: ScaleNavMain;
  new (): ScaleNavMain;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
