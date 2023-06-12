export declare class RadioButtonGroup {
  hostElement: HTMLElement;
  /** (optional) Input label */
  label: string;
  /** (optional) Input helper text */
  helperText?: string;
  /** @deprecated - invalid should replace status */
  status?: string;
  /** (optional) Input status */
  invalid?: boolean;
  private readonly internalId;
  componentDidRender(): void;
  renderHelperIcon(): any;
  render(): any;
  getCssClassMap(): string;
}
