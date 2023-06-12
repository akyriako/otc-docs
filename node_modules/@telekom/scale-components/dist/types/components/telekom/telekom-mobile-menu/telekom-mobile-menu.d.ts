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
export declare class TelekomMobileMenu {
  hostElement: HTMLStencilElement;
  backButtonTitle: string;
  appName?: string;
  appNameLink?: string;
  appNameClick?: any;
  currentLevel?: string;
  scaleCloseNavFlyout: any;
  handleSetMenuItemActive(e: any): void;
  handleSetMenuItemOpen(e: any): void;
  connectedCallback(): void;
  componentWillRender(): void;
  get menuItems(): NodeListOf<HTMLElement> | null;
  get activeItem(): HTMLElement | null;
  get openItems(): HTMLElement[] | null;
  setLevelAttributeForAllItems: () => void;
  back: () => void;
  render(): any;
}
