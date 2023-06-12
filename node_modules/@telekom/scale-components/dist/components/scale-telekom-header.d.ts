import type { Components, JSX } from "../types/components";

interface ScaleTelekomHeader extends Components.ScaleTelekomHeader, HTMLElement {}
export const ScaleTelekomHeader: {
  prototype: ScaleTelekomHeader;
  new (): ScaleTelekomHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
