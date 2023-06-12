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
import { EventEmitter } from '../../../stencil-public-runtime';
import { MenuItem } from '../app-interfaces';
export declare class MainNavigationMobile {
  mainNavigationWrapper?: HTMLUListElement;
  childrenWrapper?: HTMLUListElement;
  hide: () => void;
  navigation: MenuItem[];
  activeRouteId: string;
  selected: MenuItem;
  parent: MenuItem;
  closeMenu: EventEmitter;
  handleActiveRoute(newValue: any): void;
  componentWillLoad(): void;
  closeMenuHandler(): void;
  handlePrevSelected(event: any, item: any): void;
  handleSelect(event: any, item: any): void;
  childMenuPage(): any;
  render(): any;
}
