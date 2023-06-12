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
export declare class MenuFlyoutList {
  hostElement: HTMLElement;
  /** Used to force a re-render */
  forceRender: number;
  /** */
  opened: boolean;
  /** */
  trigger: () => HTMLElement;
  /** (optional) Set preference for where the menu appears, space permitting */
  direction: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'right' | 'left';
  /**  */
  active: boolean;
  /** (optional) Determines whether the flyout should close when a menu item is selected */
  closeOnSelect: boolean;
  /** (optional) set to true when using in telekom-brand-header */
  brandHeaderDropdown: boolean;
  /** (optional) Injected styles */
  styles?: string;
  /** Event triggered when menu list opened */
  scaleOpen: EventEmitter<{
    list: HTMLElement;
  }>;
  /** @deprecated in v3 in favor of kebab-case event names */
  scaleOpenLegacy: EventEmitter<{
    list: HTMLElement;
  }>;
  /** Event triggered when menu list closed */
  scaleClose: EventEmitter<{
    list: HTMLElement;
  }>;
  /** @deprecated in v3 in favor of kebab-case event names */
  scaleCloseLegacy: EventEmitter<{
    list: HTMLElement;
  }>;
  /** Keep track of base element */
  private base;
  /** Keep track of list element */
  private list;
  /** Flags to know if content scrollable */
  private canScrollUp;
  private canScrollDown;
  /** When menu off the screen horizontally */
  private flipHorizontal;
  /** When menu off the screen vertically */
  private flipVertical;
  /** Set true when resize or when opened */
  private needsCheckPlacement;
  /** Track window height to see if menus are off screen */
  private windowHeight;
  /** Track window width to see if menus are off screen */
  private windowWidth;
  private items;
  private focusedItemIndex;
  get triggerRect(): DOMRect;
  componentDidRender(): void;
  open(): Promise<void>;
  close(silent?: boolean): Promise<void>;
  setFocus(): Promise<void>;
  handleResize(): void;
  handleKeydown(event: KeyboardEvent): void;
  /**
   * We handle item clicks here, to avoid setting up
   * listeners on every item
   */
  handleClick(event: MouseEvent): void;
  /**
   * Focus newly selected item
   */
  handleScaleSelect({ detail }: {
    detail: any;
  }): void;
  /**
   * Set `active` to false when a descendant opens
   */
  handleScaleOpen({ detail }: {
    detail: any;
  }): void;
  openedChanged(): void;
  handleScroll: () => void;
  handleWheel: (event: WheelEvent) => void;
  setInitialItemsFocus(): void;
  shiftItemsFocus(direction?: -1 | 1): void;
  focusItem(): void;
  updateTriggerAttributes(): void;
  setWindowSize(): void;
  setPosition(): void;
  setSize(): void;
  checkPlacement(): void;
  furtherAdjustPlacement(): void;
  /**
   * Add scrollbar width to menu, to avoid horizontal scrollbars
   * or scrollbar forcing text-overflow.
   * (This affects Firefox and Safari, where non-overlay scrollbars
   * eat into content width rather than add)
   */
  padForNonOverlayScrollbars(): void;
  updateScrollIndicators(): void;
  /**
   * Check if going in a direction with content to reach, otherwise stop
   */
  stopWheelPropagation(event: WheelEvent): void;
  getListItems(): Element[];
  getCssClassMap(): string;
  render(): any;
}
