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
export declare class NotificationBadge {
  hostElement: HTMLElement;
  /** (optional) Text that is displayed in the badge */
  label: number;
  /** (optional) Maximal number of characters displayed in the badge */
  maxCharacters: number;
  /** (optional) Setting/Slotcontent in which the badge is used */
  type: 'icon' | 'text' | 'nav-icon';
  /** (optional) Handle click on the badge and surroundet slot elements */
  clickHandler: any;
  connectedCallback(): void;
  getBadgeLabel(): string | number;
  getRender(): any;
  render(): any;
  getCssClassMap(): string;
}
