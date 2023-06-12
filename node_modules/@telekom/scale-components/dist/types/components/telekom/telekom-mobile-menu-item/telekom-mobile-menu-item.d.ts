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
export declare class TelekomMobileMenuItem {
  hostElement: HTMLStencilElement;
  open?: boolean;
  active?: boolean;
  level?: string;
  currentLevel?: string;
  scaleSetMenuItemActive: any;
  scaleSetMenuItemOpen: any;
  scaleCloseNavFlyout: any;
  openChanged(newValue: boolean): void;
  toggleChildrenVisibility(show: any): void;
  handleClick: (e: any) => CustomEvent<any>[];
  get children(): NodeListOf<HTMLElement> | null;
  get openChildren(): HTMLElement[] | null;
  render(): any;
}
