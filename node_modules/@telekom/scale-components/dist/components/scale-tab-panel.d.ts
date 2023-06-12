import type { Components, JSX } from "../types/components";

interface ScaleTabPanel extends Components.ScaleTabPanel, HTMLElement {}
export const ScaleTabPanel: {
  prototype: ScaleTabPanel;
  new (): ScaleTabPanel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
