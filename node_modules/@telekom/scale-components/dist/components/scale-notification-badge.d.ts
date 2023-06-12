import type { Components, JSX } from "../types/components";

interface ScaleNotificationBadge extends Components.ScaleNotificationBadge, HTMLElement {}
export const ScaleNotificationBadge: {
  prototype: ScaleNotificationBadge;
  new (): ScaleNotificationBadge;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
