import type { Components, JSX } from "../types/components";

interface ScaleModal extends Components.ScaleModal, HTMLElement {}
export const ScaleModal: {
  prototype: ScaleModal;
  new (): ScaleModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
