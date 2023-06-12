import type { Components, JSX } from "../types/components";

interface AppNavigationSectorMobile extends Components.AppNavigationSectorMobile, HTMLElement {}
export const AppNavigationSectorMobile: {
  prototype: AppNavigationSectorMobile;
  new (): AppNavigationSectorMobile;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
