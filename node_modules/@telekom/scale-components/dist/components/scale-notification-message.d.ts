import type { Components, JSX } from "../types/components";

interface ScaleNotificationMessage extends Components.ScaleNotificationMessage, HTMLElement {}
export const ScaleNotificationMessage: {
  prototype: ScaleNotificationMessage;
  new (): ScaleNotificationMessage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
