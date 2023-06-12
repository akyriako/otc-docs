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
export declare class NavMain {
  hostElement: HTMLStencilElement;
  isActive: boolean;
  /** (optional) if this item is active */
  active: boolean;
  popup: boolean;
  isMegaMenuVisible?: boolean;
  /** (optional) if this mega-menu is visible */
  megaMenuVisible?: boolean;
  /** (optional) href value */
  href?: string;
  /** (optional) name value */
  name: string;
  /** (optional) target value */
  target?: string;
  /** (optional) inner element id */
  innerId?: string;
  clickLink: any;
  hasPopup: boolean;
  componentWillLoad(): void;
  componentWillRender(): void;
  render(): any;
  getCssClassMap(): string;
}
