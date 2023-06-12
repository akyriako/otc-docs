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
export declare class TelekomNavList {
  hostElement: HTMLStencilElement;
  role: string | null;
  alignment: 'left' | 'center' | 'right';
  variant: 'meta-nav-external' | 'meta-nav' | 'lang-switcher' | 'main-nav' | 'functions';
  handleScaleExpanded(event: any): void;
  closeExpandedFlyoutSiblings(target: HTMLElement): void;
  connectedCallback(): void;
  render(): any;
}
