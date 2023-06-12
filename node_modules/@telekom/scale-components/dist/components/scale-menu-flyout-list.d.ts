import type { Components, JSX } from "../types/components";

interface ScaleMenuFlyoutList extends Components.ScaleMenuFlyoutList, HTMLElement {}
export const ScaleMenuFlyoutList: {
  prototype: ScaleMenuFlyoutList;
  new (): ScaleMenuFlyoutList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
