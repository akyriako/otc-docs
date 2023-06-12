import type { Components, JSX } from "../types/components";

interface AppMegaMenu extends Components.AppMegaMenu, HTMLElement {}
export const AppMegaMenu: {
  prototype: AppMegaMenu;
  new (): AppMegaMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
