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
export declare class TelekomHeaderDataBackCompat {
  appName?: string;
  appNameLink?: string;
  appNameClick?: any;
  logoHref?: string;
  logoTitle?: string;
  logoHideTitle?: boolean;
  mainNavigation: any;
  iconNavigation: any;
  addonNavigation: any;
  sectorNavigation: any;
  userNavigation: any;
  activeRouteId: string;
  userMenuMobileTrigger?: HTMLButtonElement;
  userMenuDesktopTrigger?: HTMLSpanElement;
  userMenuDesktopLink?: HTMLAnchorElement;
  render(): any;
}
