import type { Components, JSX } from "../types/components";

interface ScaleAppShell extends Components.ScaleAppShell, HTMLElement {}
export const ScaleAppShell: {
  prototype: ScaleAppShell;
  new (): ScaleAppShell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
