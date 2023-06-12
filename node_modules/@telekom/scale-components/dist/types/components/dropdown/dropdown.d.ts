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
import { Event, EventEmitter } from '../../stencil-public-runtime';
import { HTMLStencilElement } from '../../stencil-public-runtime';
interface InputChangeEventDetail {
  value: string | number | boolean | undefined | null;
}
export declare class Dropdown {
  selectElement: HTMLSelectElement;
  mutationObserver: MutationObserver;
  hostElement: HTMLStencilElement;
  /** (optional) Input name */
  name?: string;
  /** (optional) Input label */
  label: string;
  /** (optional) Input helper text */
  helperText?: string;
  /** @deprecated - invalid should replace status */
  status?: string;
  /** @deprecated */
  size?: string;
  /** (optional) Input status */
  invalid?: boolean;
  /** (optional) Variant */
  variant?: 'informational' | 'warning' | 'danger' | 'success';
  disabled?: boolean;
  /** (optional) Input required */
  required?: boolean;
  /** (optional) Input value */
  value?: string | number | null;
  /** (optional) Input checkbox id */
  inputId?: string;
  /** (optional) select multiple options */
  multiple?: boolean;
  /** (optional) the number of visible options in a select drop-down list */
  visibleSize?: number;
  /** (optional) input background transparent */
  transparent?: boolean;
  /** (optional) Makes type `select` behave as a controlled component in React */
  controlled?: boolean;
  /** (optional) to avoid displaying the label */
  hideLabelVisually?: boolean;
  /** (optional) Injected CSS styles */
  styles?: string;
  /** Emitted when a keyboard input occurred. */
  scaleInput: EventEmitter<KeyboardEvent>;
  /** @deprecated in v3 in favor of kebab-case event names */
  scaleInputLegacy: EventEmitter<KeyboardEvent>;
  /** Emitted when the value has changed. */
  scaleChange: EventEmitter<InputChangeEventDetail>;
  /** @deprecated in v3 in favor of kebab-case event names */
  scaleChangeLegacy: EventEmitter<InputChangeEventDetail>;
  /** Emitted when the input has focus. */
  scaleFocus: EventEmitter<void>;
  /** @deprecated in v3 in favor of kebab-case event names */
  scaleFocusLegacy: EventEmitter<void>;
  /** Emitted when the input loses focus. */
  scaleBlur: EventEmitter<void>;
  /** @deprecated in v3 in favor of kebab-case event names */
  scaleBlurLegacy: EventEmitter<void>;
  /** Emitted on keydown. */
  scaleKeyDown: EventEmitter<KeyboardEvent>;
  /** @deprecated in v3 in favor of kebab-case event names */
  scaleKeyDownLegacy: EventEmitter<KeyboardEvent>;
  /** "forceUpdate" hack, set it to trigger and re-render */
  forceUpdate: string;
  hasSlotIcon: boolean;
  private readonly internalId;
  componentWillLoad(): void;
  componentDidLoad(): void;
  componentDidUpdate(): void;
  componentDidRender(): void;
  disconnectedCallback(): void;
  emitChange(): void;
  handleSelectChange: (event: Event) => void;
  handleInput: (event: Event) => void;
  handleChange: (event: Event) => void;
  handleFocus: () => void;
  handleBlur: () => void;
  handleKeyDown: (event: KeyboardEvent) => void;
  render(): any;
  getCssClassMap(): string;
}
export {};
