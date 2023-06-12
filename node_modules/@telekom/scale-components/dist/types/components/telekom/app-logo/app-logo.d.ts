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
export declare class Logo {
  hostElement: HTMLStencilElement;
  href?: string;
  logoTitle?: string;
  color: string;
  claim: boolean;
  claimLang: string;
  focusable: boolean;
  componentDidRender(): void;
  render(): any;
}
