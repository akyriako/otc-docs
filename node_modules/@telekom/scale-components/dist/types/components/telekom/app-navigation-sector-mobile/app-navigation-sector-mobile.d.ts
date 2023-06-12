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
import { MenuItem } from '../app-interfaces';
export declare class NavigationSectorMobile {
  hide: () => void;
  navigation: MenuItem[];
  activeSectorId?: string;
  selected: MenuItem;
  handleActiveSegment(newValue: any): void;
  handleSelected(event: any, item: any): void;
  render(): any;
}
