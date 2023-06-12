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
export declare class SidebarNavItem {
  srOnlyElement: HTMLElement;
  el: HTMLElement;
  /** Used normally for third level items, remove the bottom border */
  condensed: boolean;
  /** Bold text */
  bold: boolean;
  /** Text gets the active color */
  active: boolean;
  /**
   * Mark the child link as "current" with `aria-current=page`.
   * Provide the text hint if needed, default is: "Zurzeit aktiv"
   */
  current: string | null | boolean;
  /** Nesting level within the <scale-sidebar-nav> parent, gets set automatically */
  nestingLevel: number;
  /** (optional) Extra styles */
  styles?: string;
  nestingLevelChanged(newValue: number): void;
  currentChanged(newValue: any): void;
  componentDidLoad(): void;
  /**
   * If an item is `current`, it should be `active` as well
   */
  syncActiveToCurrent(newValue: any): void;
  /**
   * When `current` is set, this will:
   * - set the aria-current=page attribute on the link
   * - append a text-only hint for screen readers
   * so we end up with something like this:
   * <a href="..." aria-current="page">
   *    Example<span style="...visible to SR only..."> Active link</span>
   * </a>
   * @param current this.current
   */
  handleAriaCurrentInSlottedA(current: any): void;
  createScreenReaderOnlySpan(): HTMLSpanElement;
  render(): any;
  getBasePartMap(): string;
  getCssClassMap(): string;
  getCssOrBasePartMap(mode: 'basePart' | 'css'): string;
}
