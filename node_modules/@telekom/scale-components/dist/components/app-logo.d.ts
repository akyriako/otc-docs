import type { Components, JSX } from "../types/components";

interface AppLogo extends Components.AppLogo, HTMLElement {}
export const AppLogo: {
  prototype: AppLogo;
  new (): AppLogo;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
