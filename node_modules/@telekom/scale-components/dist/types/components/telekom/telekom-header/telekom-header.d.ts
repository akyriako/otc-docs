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
import { HTMLStencilElement } from '../../../stencil-public-runtime';
export declare class TelekomHeader {
  hostElement: HTMLStencilElement;
  appName?: string;
  appNameLink?: string;
  appNameClick?: any;
  logoHref?: string;
  logoTitle?: string;
  logoHideTitle?: boolean;
  type?: string;
  metaNavAriaLabel?: string;
  metaNavExternalAriaLabel?: string;
  langSwitcherAriaLabel?: string;
  mainNavAriaLabel?: string;
  scrolled: boolean;
  scrolledBack: boolean;
  pageYOffset: number;
  onScroll(): void;
  render(): any;
}
