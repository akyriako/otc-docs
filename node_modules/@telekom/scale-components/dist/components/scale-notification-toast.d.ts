import type { Components, JSX } from "../types/components";

interface ScaleNotificationToast extends Components.ScaleNotificationToast, HTMLElement {}
export const ScaleNotificationToast: {
  prototype: ScaleNotificationToast;
  new (): ScaleNotificationToast;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
