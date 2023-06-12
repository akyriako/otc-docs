import type { Components, JSX } from "../types/components";

interface AppNavigationUserMenu extends Components.AppNavigationUserMenu, HTMLElement {}
export const AppNavigationUserMenu: {
  prototype: AppNavigationUserMenu;
  new (): AppNavigationUserMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
