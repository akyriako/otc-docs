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
/**
 * Usage example:
 *
 * ```html
 *  <scale-telekom-mega-menu-column>
 *    <scale-icon-home-home slot="icon"></scale-icon-home-home>
 *    <a href="#" slot="heading">My heading</a>
 *    <ul>
 *      <li><a href="#">Link One</a></li>
 *      <li><a href="#">Link Two</a></li>
 *      <li><a href="#">Link Three</a></li>
 *      <li><a href="#">Link Four</a></li>
 *    </ul>
 *  </scale-telekom-mega-menu-column>
 * ```
 */
export declare class TelekomMegaMenuColumn {
  hostElement: HTMLStencilElement;
  headingLevel: number;
  headingHasLink: boolean;
  connectedCallback(): void;
  render(): any;
}
