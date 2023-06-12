import type { Components, JSX } from "../types/components";

interface ScaleChartStackCard extends Components.ScaleChartStackCard, HTMLElement {}
export const ScaleChartStackCard: {
  prototype: ScaleChartStackCard;
  new (): ScaleChartStackCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
