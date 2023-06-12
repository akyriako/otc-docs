export declare class LoadingSpinner {
  variant: 'white' | 'primary';
  alignment: 'horizontal' | 'vertical';
  text: string;
  size: 'small' | 'large';
  componentWillLoad(): void;
  render(): any;
  getBasePartMap(): string;
  getCssClassMap(): string;
  getCssOrBasePartMap(mode: 'basePart' | 'css'): string;
}
