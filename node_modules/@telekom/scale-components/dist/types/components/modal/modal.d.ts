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
declare type CloseEventTrigger = 'CLOSE_BUTTON' | 'ESCAPE_KEY' | 'BACKDROP';
export interface BeforeCloseEventDetail {
  trigger: CloseEventTrigger;
}
export declare class Modal {
  hostElement: HTMLElement;
  /** Modal heading */
  heading: string;
  /** (optional) Modal size */
  size?: string;
  /** (optional) If `true`, the Modal is open. */
  opened?: boolean;
  /** (optional) Transition duration */
  duration?: number;
  /** (optional) Label for close button */
  closeButtonLabel?: string;
  /** (optional) title for close button */
  closeButtonTitle?: string;
  /** (optional) hide close button */
  omitCloseButton?: boolean;
  /** (optional) Alignment of action buttons */
  alignActions?: 'right' | 'left';
  /** (optional) Injected CSS styles */
  styles?: string;
  /** (optional) allow to inject css style {overflow: hidden} to body when modal is open */
  allowInjectingStyleToBody: boolean;
  /** What actually triggers opening/closing the modal */
  isOpen: boolean;
  /** Check wheter there are actions slots, style accordingly */
  hasActionsSlot: boolean;
  /** Check wheter there's content in the body, style accordingly */
  hasBody: boolean;
  /** Useful for toggling scroll-specific styles */
  hasScroll: boolean;
  /** store document body original overflow style if applicable, this is useful when modal opens and inject overflow style to body */
  bodyOverflowValue: string;
  /** Fires when the modal has been opened */
  scaleOpen: EventEmitter<void>;
  /** @deprecated in v3 in favor of kebab-case event names */
  scaleOpenLegacy: EventEmitter<void>;
  /** Fires on every close attempt. Calling `event.preventDefault()` will prevent the modal from closing */
  scaleBeforeClose: EventEmitter<BeforeCloseEventDetail>;
  /** @deprecated in v3 in favor of kebab-case event names */
  scaleBeforeCloseLegacy: EventEmitter<BeforeCloseEventDetail>;
  /** Fires when the modal has been closed */
  scaleClose: EventEmitter<void>;
  /** @deprecated in v3 in favor of kebab-case event names */
  scaleCloseLegacy: EventEmitter<void>;
  private closeButton;
  private modalContainer;
  private modalWindow;
  private modalBody;
  private focusableElements;
  private resizeObserver;
  handleKeypress: (event: KeyboardEvent) => void;
  disconnectedCallback(): void;
  /**
   * Set `hasActionsSlot` and `hasBody`.
   */
  componentWillRender(): void;
  emitBeforeClose(trigger: CloseEventTrigger): void;
  componentDidLoad(): void;
  setHasScroll(): void;
  getFirstFocusableElement(): HTMLElement | null;
  getLastFocusableElement(): HTMLElement | null;
  handleTopFocus: () => void;
  handleBottomFocus: () => void;
  attemptFocus(element: HTMLElement | null): void;
  openedChanged(newValue: any): void;
  open(): void;
  close(): void;
  render(): any;
  getCssClassMap(): string;
}
export {};
