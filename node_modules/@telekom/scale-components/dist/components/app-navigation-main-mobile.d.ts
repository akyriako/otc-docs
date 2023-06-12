import type { Components, JSX } from "../types/components";

interface AppNavigationMainMobile extends Components.AppNavigationMainMobile, HTMLElement {}
export const AppNavigationMainMobile: {
  prototype: AppNavigationMainMobile;
  new (): AppNavigationMainMobile;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
