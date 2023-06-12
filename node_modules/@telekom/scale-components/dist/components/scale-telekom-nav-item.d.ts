import type { Components, JSX } from "../types/components";

interface ScaleTelekomNavItem extends Components.ScaleTelekomNavItem, HTMLElement {}
export const ScaleTelekomNavItem: {
  prototype: ScaleTelekomNavItem;
  new (): ScaleTelekomNavItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
