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
export declare class MenuFlyoutItem {
  hostElement: HTMLElement;
  /** (optional) Set to true to display arrow icon suffix */
  cascade?: boolean;
  /** (optional) Mark as active */
  active?: boolean;
  /** (optional) Whether the item should behave as a checkbox */
  checkable?: 'checkbox' | 'radio' | null;
  /** (optional) Set to true to display check prefix, false to display empty prefix */
  checked?: boolean;
  /** (optional) Disabled */
  disabled?: boolean;
  /** (optional) value */
  value?: string;
  /** (optional) Injected styles */
  styles?: string;
  /** Event triggered when menu item selected */
  scaleSelect: EventEmitter<{
    item: HTMLElement;
  }>;
  /** @deprecated in v3 in favor of kebab-case event names */
  scaleSelectLegacy: EventEmitter<{
    item: HTMLElement;
  }>;
  private hasSlotSublist;
  triggerEvent(event: KeyboardEvent | MouseEvent, closeOnSelect?: boolean): Promise<void>;
  connectedCallback(): void;
  openSublist(): void;
  getCssClassMap(): string;
  render(): any;
}
