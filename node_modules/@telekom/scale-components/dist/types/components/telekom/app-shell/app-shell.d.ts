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
export declare class Shell {
  hostElement: HTMLStencilElement;
  portalName?: string;
  claimLang?: string;
  logoHref?: string;
  logoTitle?: string;
  logoHideTitle?: boolean;
  logoClick?: any;
  logoAriaDescribedBy?: string;
  mainNavigation?: any;
  iconNavigation?: any;
  userNavigation?: any;
  sectorNavigation?: any;
  addonNavigation?: any;
  activeRouteId?: string;
  activeSectorId?: string;
  userMenuAriaLabel?: string;
  sticky?: boolean;
  scrolled: boolean;
  /** (optional) Injected CSS styles */
  styles?: string;
  hasSlotHeader: boolean;
  componentWillLoad(): void;
  render(): any;
}
