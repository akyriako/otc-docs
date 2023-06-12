/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { EventEmitter } from '../../stencil-public-runtime';
export declare class Tooltip {
  componentId: string;
  hostElement: HTMLElement;
  /** (optional) The content of the Tooltip, supporting text only */
  content?: string;
  /** (optional) Position of the Tooltip around the trigger element */
  placement?: 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end';
  /** (optional) Disable the tooltip */
  disabled?: boolean;
  /** (optional) Tooltip distance from the target element (related to `placement`) */
  distance?: number;
  /** (optional) How much of the arrow element is "hidden" */
  arrowOffset?: number;
  /** (optional) Padding between the arrow and the edges of the tooltip */
  arrowPadding?: number;
  /** (optional) Set the tooltip to opened by default (will still be closed on closing events) */
  opened?: boolean;
  /** (optional) Set custom trigger event (hover, focus, click) */
  trigger?: string;
  /** (optional) Switching the flip option of the tooltip on and off */
  flip?: boolean;
  /** (optional) Injected CSS styles */
  styles?: string;
  mouseOverTooltip: boolean;
  tooltipBeforeShow: EventEmitter;
  tooltipShow: EventEmitter;
  tooltipBeforeHide: EventEmitter;
  tooltipHide: EventEmitter;
  private tooltipEl;
  private arrowEl;
  private triggerEl;
  handleOpenChange(): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  handleOutsideClick(event: MouseEvent): void;
  componentDidUpdate(): void;
  /**
   * @see https://floating-ui.com/docs/tutorial#arrow-middleware
   */
  update: () => Promise<void>;
  componentDidRender(): void;
  showTooltip(): Promise<void>;
  hideTooltip(): Promise<void>;
  handleBlur: () => void;
  handleClick: () => void;
  handleFocus: () => void;
  handleKeyDown: (event: KeyboardEvent) => void;
  handleMouseOver: () => void;
  handleMouseOut: () => void;
  handleTooltipMouseOver: () => void;
  handleTooltipBlur: () => void;
  hasTrigger: (triggerType: string) => boolean;
  render(): any;
}
