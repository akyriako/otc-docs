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
export declare class Header {
  hostElement: HTMLStencilElement;
  mobileMenuToggle?: HTMLAnchorElement;
  userMenuToggle?: HTMLAnchorElement;
  userMenuMobileToggle?: HTMLAnchorElement;
  logoHref?: string;
  logoTitle?: string;
  logoHideTitle?: boolean;
  logoClick?: any;
  logoAriaDescribedBy?: string;
  claimLang: string;
  portalName?: string;
  mainNavigation?: any;
  iconNavigation?: any;
  userNavigation?: any;
  sectorNavigation?: any;
  addonNavigation?: any;
  activeRouteId: string;
  activeSectorId?: string;
  sticky?: boolean;
  userMenuAriaLabel?: string;
  isMegaMenuVisible?: boolean;
  megaMenuVisible?: boolean;
  isMobileMenuVisible?: boolean;
  mobileMenuVisible?: boolean;
  activeSegment: any;
  mobileMenu: boolean;
  userMenu: boolean;
  userMenuMobile: boolean;
  visibleMegaMenu: string;
  scrolled: boolean;
  hasSlotMenuMain: boolean;
  hasSlotMenuIcon: boolean;
  hasSlotMenuSector: boolean;
  hasSlotMenuAddon: boolean;
  hasSlotMenuMobile: boolean;
  hasSlotLogo: boolean;
  hasSlotLogoInverse: boolean;
  megaMenuVisibleChange(isVisible: any): void;
  isMegaMenuVisibleChange(isVisible: any): void;
  onScroll(): void;
  handleCloseMenu(): void;
  handleCloseUserMenu(): void;
  handleOpenUserMenu(): void;
  handleActiveSegment(newValue: any): void;
  componentWillLoad(): void;
  componentDidUpdate(): void;
  componentWillRender(): void;
  handleMobileMenu(event?: KeyboardEvent | MouseEvent): void;
  handleSelectedSegment(event: any, item: any): void;
  menuMain(): any;
  menuIcon(): any;
  menuSector(): any;
  menuAddon(): any;
  render(): any;
  getCssClassMap(): string;
}
