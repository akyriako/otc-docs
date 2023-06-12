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
export declare class NotificationBanner {
  hostElement: HTMLElement;
  variant?: 'informational' | 'success' | 'warning' | 'error';
  dismissible?: boolean;
  opened: boolean;
  autoHide?: boolean;
  autoHideDuration?: number;
  href: string;
  /** (optional) Label for close button */
  closeButtonLabel?: string;
  /** (optional) Title for close button */
  closeButtonTitle?: string;
  /** Fires when the notification banner has been dismissed */
  scaleClose: EventEmitter<void>;
  hasSlotText?: boolean;
  hasSlotLink?: boolean;
  componentWillLoad(): void;
  componentDidUpdate(): void;
  connectedCallback(): void;
  open(): Promise<void>;
  handleIcons(): any;
  close: () => void;
  render(): any;
  getBasePartMap(): string;
  getCssClassMap(): string;
  getCssOrBasePartMap(mode: 'basePart' | 'css'): string;
}
