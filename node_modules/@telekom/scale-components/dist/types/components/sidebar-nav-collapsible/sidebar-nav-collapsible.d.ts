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
export declare class SidebarNavCollapsible {
  el: HTMLElement;
  /** The parent wrapper */
  tag?: string;
  /** The text for the button */
  label: string;
  /** The URL where the link should point to */
  href: string;
  /** Set this to `true` to expand */
  expanded: boolean;
  /** Label and icon get the active color */
  active?: boolean;
  /** Bold label and icon */
  bold: boolean;
  /** Used normally for third level items */
  condensed: boolean;
  /** Nesting level within the <scale-sidebar-nav> parent, gets set automatically */
  nestingLevel: number;
  /** (optional) Extra styles */
  styles?: string;
  nestingLevelChanged(newValue: number): void;
  handleClick: (event: MouseEvent) => void;
  /**
   * Simulate a <button> allowing using the Space key for toggling the menu.
   */
  handleKeydown: (event: KeyboardEvent) => void;
  render(): any;
  getBasePartMap(): string;
  getCssClassMap(): string;
  getCssOrBasePartMap(mode: 'basePart' | 'css'): string;
}
