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
export declare class TelekomNavItem {
  hostElement: HTMLStencilElement;
  /** Open the flyout menu */
  expanded?: boolean;
  /** (optional) Selector to query the trigger element in case it's not the previous sibling */
  triggerSelector?: string;
  /** (optional) Variant ("mobile" gives it a fixed height of `100vh`) */
  variant?: null | 'mobile';
  /** (optinal) Whether the flyout should open on hover (needs better name!) */
  hover?: boolean;
  isExpanded: boolean;
  animationState: 'in' | 'out' | undefined;
  scaleExpanded: any;
  private parentElement;
  handleWindowKeydown(event: any): void;
  handleScaleCloseNavFlyout(): void;
  handleDocumentClick(event: any): void;
  expandedChanged(newValue: boolean): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  handleSpaceOrEnterForHover: (event: KeyboardEvent) => void;
  handleTriggerClick: (event: MouseEvent) => void;
  handlePointerIn: () => void;
  handlePointerOut: () => void;
  show(): Promise<void>;
  hide(): Promise<void>;
  /**
   * Get the trigger element "on demand".
   * Either query by `trigger-selector` or
   * get the previous sibling.
   */
  get triggerElement(): HTMLElement;
  render(): any;
}
