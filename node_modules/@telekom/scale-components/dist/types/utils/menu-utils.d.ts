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
import { MenuItem } from '../components/telekom/app-interfaces';
export declare const findSelected: (structure: MenuItem[], id: string, parent?: MenuItem) => any;
export declare const findRootNode: (structure: MenuItem[], id: string) => any;
