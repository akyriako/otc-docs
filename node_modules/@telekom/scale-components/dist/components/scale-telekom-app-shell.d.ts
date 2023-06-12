import type { Components, JSX } from "../types/components";

interface ScaleTelekomAppShell extends Components.ScaleTelekomAppShell, HTMLElement {}
export const ScaleTelekomAppShell: {
  prototype: ScaleTelekomAppShell;
  new (): ScaleTelekomAppShell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
