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
 * @todo styles for custom icon (no-marker prop?)
 * @see https://github.com/carbon-design-system/carbon-web-components/tree/master/src/components/list
 */
export declare class ListItem {
  el: HTMLElement;
  /** Whether this is a child of an ordered scale-list, gets set automatically by its parent */
  ordered?: boolean;
  /** Index number, useful only for styling the `ordered` type */
  index?: number;
  /** If `false`, no marker or left padding will be visible */
  marker: boolean;
  /** (optional) Injected CSS styles */
  styles?: string;
  hasNestedChild: boolean;
  isNested: boolean;
  componentWillLoad(): void;
  connectedCallback(): void;
  handleSlotChange: ({ target }: Event) => void;
  isNestedCheck: () => boolean;
  render(): any;
  getCssClassMap(): string;
}
