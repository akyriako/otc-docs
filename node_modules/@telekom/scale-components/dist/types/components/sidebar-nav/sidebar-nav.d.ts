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
export declare class SidebarNav {
  mq: MediaQueryList;
  el: HTMLElement;
  /**
   * From mdn: A brief description of the purpose of the navigation,
   * omitting the term "navigation", as the screen reader will read
   * both the role and the contents of the label.
   */
  ariaLabelSidebarNav?: string;
  /** Set to `true` to make the sidebar toggleable (useful for small screens) */
  collapsible?: boolean;
  /** Automatically set `collapsible` based on this media query */
  collapsibleMediaQuery?: string;
  /** Label for toggle button */
  collapsibleLabel?: string;
  /** (optional) Extra styles */
  styles?: string;
  collapsed: boolean;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  componentDidRender(): void;
  /**
   * Set `nesting-level` and `condensed` attributes in
   * <scale-sidebar-nav-collapsible> and <scale-sidebar-nav-item> children,
   * so styling different levels "automatically" is possible.
   */
  setNestingLevelOnChildren(): void;
  setMatchMedia(): void;
  handleMediaQueryChange: (event: MediaQueryListEvent) => void;
  toggle: () => void;
  render(): any;
  getBasePartMap(): string;
  getCssClassMap(): string;
  getCssOrBasePartMap(mode: 'basePart' | 'css'): string;
}
