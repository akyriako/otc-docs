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
export declare class Button {
  hostElement: HTMLElement;
  /** (optional) The size of the button */
  size?: 'small' | 'large';
  /** (optional) Button variant */
  variant?: string;
  /** (optional) If `true`, the button is disabled */
  disabled?: boolean;
  /** (optional) Button type */
  type?: 'reset' | 'submit' | 'button';
  /** (optional) The name of the button, submitted as a pair with the button's `value` as part of the form data */
  name?: string;
  /** (optional) Defines the value associated with the button's `name` */
  value?: string;
  /** (optional) Set to `true` when the button contains only an icon */
  iconOnly?: boolean;
  /** (optional) Icon position related to the label */
  iconPosition: 'before' | 'after';
  /** (optional) When present, an <a> tag will be used */
  href?: string;
  /** (optional) The target attribute for the <a> tag */
  target?: string;
  /** (optional) Injected CSS styles */
  styles?: string;
  /** (optional) Name of a file to be downloaded */
  download?: string;
  /** (optional) Set `tabindex` in the inner button or link element */
  innerTabindex?: number;
  /** (optional) Button aria-label */
  innerAriaLabel?: string;
  private focusableElement;
  private fallbackSubmitInputElement;
  /**
   * Prevent clicks from being emitted from the host
   * when the component is `disabled`.
   */
  handleHostClick(event: Event): void;
  setFocus(): Promise<void>;
  componentDidLoad(): void;
  /**
   * Hack to make the button behave has expected when inside forms.
   * @see https://github.com/ionic-team/ionic-framework/blob/master/core/src/components/button/button.tsx#L155-L175
   */
  handleClick: (ev: Event) => void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  /**
   * In order for forms to be submitted with the Enter key
   * there has to be a `button` or an `input[type="submit"]` in the form.
   * Browsers do not take the <button> inside the Shadow DOM into account for this matter.
   * So we carefully append an `input[type="submit"]` to overcome this.
   *
   * @see https://stackoverflow.com/a/35235768
   * @see https://github.com/telekom/scale/issues/859
   */
  appendEnterKeySubmitFallback(): void;
  cleanUpEnterKeySubmitFallback(): void;
  /**
   * Detect whether the last node is an element (not text).
   * If so, it's probably an icon, so we set `iconPosition` to `after`.
   */
  setIconPositionProp(): void;
  /**
   * Set any children icon's size according the button size.
   */
  setChildrenIconSize(): void;
  render(): any;
  getCssClassMap(): string;
}
