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
import { HTMLStencilElement } from '../../stencil-public-runtime';
export declare class Alert {
  hostElement: HTMLStencilElement;
  /** (optional) Alert size */
  size?: string;
  /** (optional) Alert variant */
  variant?: string;
  /** (optional) Alert title */
  headline: string;
  /** (optional) Alert opened */
  opened: boolean;
  /** (optional) Alert timeout */
  timeout?: boolean | number;
  /** (optional) Alert icon */
  icon?: string;
  /** (optional) Injected CSS styles */
  styles?: string;
  defaultTimeout: number;
  hasSlotClose: boolean;
  componentWillLoad(): void;
  connectedCallback(): void;
  close: () => void;
  /** Alert method: open() */
  open(): Promise<void>;
  onCloseAlertWithTimeout: () => any;
  render(): any;
  getCssClassMap(): string;
}
