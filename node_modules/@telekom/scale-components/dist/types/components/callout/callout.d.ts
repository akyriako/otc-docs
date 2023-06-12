export declare class Callout {
  hostElement: HTMLElement;
  baseEl: HTMLElement;
  mo: MutationObserver;
  /** (optional) Color variant of the callout */
  variant?: 'primary' | 'blue' | 'white' | 'black' | string;
  /** (optional) Degree of rotation */
  rotation?: number;
  /** (optional) CSS `top` value for absolute position */
  top?: string;
  /** (optional) CSS `right` value for absolute position */
  right?: string;
  /** (optional) CSS `bottom` value for absolute position */
  bottom?: string;
  /** (optional) CSS `left` value for absolute position */
  left?: string;
  /** (optional) Injected CSS styles */
  styles?: string;
  connectedCallback(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  rotationChanged(): void;
  /**
   * `aspect-ratio` is not enough when dealing with text :(
   */
  adjustSize: () => void;
  syncPropsToCSS(): void;
  render(): any;
}
