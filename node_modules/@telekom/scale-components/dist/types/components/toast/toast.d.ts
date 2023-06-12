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
export declare class Toast {
  /** (optional) Toast size */
  size?: string;
  /** (optional) Toast variant */
  variant?: string;
  /** (optional) Toast opened */
  opened?: boolean;
  /** (optional) Toast autohide time */
  autoHide?: boolean | number;
  /** (optional) Animated toast */
  animated?: boolean;
  /** (optional) Toast time */
  time?: number;
  /** (optional) Toast position at the top */
  positionTop?: number;
  /** (optional) Toast position right */
  positionRight?: number;
  /** (optional) Toast fade duration */
  fadeDuration?: number;
  /** (optional) Injected CSS styles */
  styles?: string;
  /** (optional) Toast state progress */
  progress: number;
  /** (optional) Toast state height with offset */
  toastHeightWithOffset: number;
  element: HTMLElement;
  hideToast: boolean;
  timerId: any;
  connectedCallback(): void;
  disconnectedCallback(): void;
  close: () => void;
  getTime: () => string;
  setToastTimeout: () => void;
  /** Toast method: open() */
  open(): Promise<void>;
  render(): any;
  transitions: (offset: any) => string;
  animationStyle: (offset: any) => string;
  getToastHeightWithOffset(): void;
  getAutoHide(): number;
  getBasePartMap(): string;
  getCssClassMap(): string;
  getCssOrBasePartMap(mode: 'basePart' | 'css'): string;
}
