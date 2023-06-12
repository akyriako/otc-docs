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
/**
 * @see https://github.com/carbon-design-system/carbon-web-components/tree/master/src/components/list
 */
export declare class List {
  isNested: boolean;
  el: HTMLElement;
  /** (optional) Make the list ordered (ol) */
  ordered?: boolean;
  /** (optional) Injected CSS styles */
  styles?: string;
  orderedChanged(newValue: any): void;
  componentDidLoad(): void;
  connectedCallback(): void;
  propagatePropsToChildren(ordered: boolean): void;
  render(): any;
  getCssClassMap(): string;
}
