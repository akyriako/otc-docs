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
export declare class NotificationToast {
  /** (optional) Toast variant */
  variant?: 'error' | 'warning' | 'success' | 'informational';
  /** (optional) Toast opened */
  opened?: boolean;
  /** (optional) Animated toast */
  animated?: boolean;
  /** (optional) Alignment choose for top and bottom */
  alignment?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  /** (optional) Toast position at the top */
  positionVertical?: number;
  /** (optional) Toast position right */
  positionHorizontal?: number;
  /** (optional) Toast auto hide */
  autoHide?: boolean;
  /** (optional) Toast auto hide duration */
  autoHideDuration?: number;
  /** (optional) Toast fade duration */
  fadeDuration?: number;
  /** (optional) Injected CSS styles */
  styles?: string;
  /** (optional) Label for close button */
  closeButtonLabel?: string;
  /** (optional) Title for close button */
  closeButtonTitle?: string;
  /** (do not use) it is a helper prop for storybook */
  story?: boolean;
  /** (optional) Toast state height with offset */
  toastHeightWithOffset: number;
  href: string;
  element: HTMLElement;
  /** Triggered when the notification toast closing process begins */
  scaleClosing: EventEmitter<void>;
  /** Triggered when the notification toast has been dismissed */
  scaleClose: EventEmitter<void>;
  hideToast: boolean;
  alignmentVertical: string;
  alignmentHorizontal: string;
  connectedCallback(): void;
  componentWillLoad(): void;
  componentDidRender(): void;
  close: () => void;
  handleIcons(): any;
  /** Toast method: open() */
  open(): Promise<void>;
  render(): any;
  transitions: (offset: any) => string;
  animationStyle: (offset: any) => string;
  getToastHeightWithOffset(): void;
  getBasePartMap(): string;
  getCssClassMap(): string;
  getCssOrBasePartMap(mode: 'basePart' | 'css'): string;
}
