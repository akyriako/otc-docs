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
import { EventEmitter } from '../../stencil-public-runtime';
export interface CollapsibleEventDetail {
  expanded: boolean;
}
export declare class Collapsible {
  headingId: string;
  panelId: string;
  headingElement: HTMLElement;
  hostElement: HTMLElement;
  /** Set to `true` to expand */
  expanded: boolean;
  /** Default aria-level for heading */
  headingLevel: number;
  /** (optional) Injected CSS styles */
  styles?: string;
  iconLocation?: 'left' | 'right';
  /** Emitted so parent <scale-accordion> knows about it */
  scaleExpand: EventEmitter<CollapsibleEventDetail>;
  /** @deprecated in v3 in favor of kebab-case event names */
  scaleExpandLegacy: EventEmitter<CollapsibleEventDetail>;
  componentWillLoad(): void;
  componentDidLoad(): void;
  handleClick: () => void;
  /**
   * @deprecated Safe to remove in 4.0
   * @see https://github.com/telekom/scale/pull/319
   */
  setHeadingFromLightDOM(): void;
  render(): any;
  getCssClassMap(): string;
}
