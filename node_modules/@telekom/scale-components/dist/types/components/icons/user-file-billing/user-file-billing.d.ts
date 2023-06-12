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
export declare class UserFileBilling {
  hostElement: HTMLElement;
  /** (optional) The width and height in pixels */
  size?: number;
  /** (optional) Sets the icon color via the `fill` attribute */
  fill?: string;
  /** (optional) Alias for `fill` */
  color?: string;
  /** (optional) If `true`, the icon changes visually */
  selected?: boolean;
  /** (optional) If `true` the SVG element will get `aria-hidden="true"` */
  decorative?: boolean;
  /** (optional) When using the icon standalone, make it meaningful for accessibility */
  accessibilityTitle?: string;
  /** (optional) If `true` the icon can receive focus */
  focusable?: boolean;
  connectedCallback(): void;
  render(): any;
}
