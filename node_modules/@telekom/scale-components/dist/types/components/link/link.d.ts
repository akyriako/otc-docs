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
 * This is a superset of the default anchor `<a>` element.
 * @part anchor - the native achor element wrapping all contents
 * @part content - a wrapper around the default slot with the underline
 *
 * @slot default - here goes the actual text of the
 * @slot icon - a slot that will not be underlined and which position can be changed
 */
export declare class Link {
  /** (optional) Disabled link */
  disabled?: boolean;
  /** (optional) Remove the initial line from the text (can also be achieved via `--line-thickness-initial: 0`)
   * Remove the line for every state with `--line-thickness: 0`
   */
  omitUnderline?: boolean;
  /** (optional) Link href */
  href: string;
  /** (optional) Download declaration */
  download?: string;
  /** (optional) Chnage icon/content slot order */
  iconPosition?: 'before' | 'after';
  /** (optional) */
  hreflang?: string;
  /** (optional) */
  ping?: string;
  /** (optional) */
  referrerpolicy?: ReferrerPolicy;
  /** (optional) */
  rel?: string;
  /** (optional) */
  target?: '_self' | '_blank' | '_parent' | '_top';
  /** (optional) */
  type?: string;
  /** (optional) Set `tabindex` in the inner button or link element */
  innerTabindex?: number;
  /** (optional) Injected CSS styles */
  styles?: string;
  private focusableElement;
  setFocus(): Promise<void>;
  getAnchorProps(): {
    href: string;
    tabIndex: number;
    'aria-disabled': string;
    download: string;
    hreflang: string;
    ping: string;
    referrerpolicy: "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
    rel: string;
    target: "_self" | "_blank" | "_parent" | "_top";
    type: string;
  };
  render(): any;
}
