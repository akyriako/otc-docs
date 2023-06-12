import type { Components, JSX } from "../types/components";

interface ScaleAccordion extends Components.ScaleAccordion, HTMLElement {}
export const ScaleAccordion: {
  prototype: ScaleAccordion;
  new (): ScaleAccordion;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
