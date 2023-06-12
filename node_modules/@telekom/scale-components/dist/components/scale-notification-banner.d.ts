import type { Components, JSX } from "../types/components";

interface ScaleNotificationBanner extends Components.ScaleNotificationBanner, HTMLElement {}
export const ScaleNotificationBanner: {
  prototype: ScaleNotificationBanner;
  new (): ScaleNotificationBanner;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
