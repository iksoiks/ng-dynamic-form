export interface Validator {
  name: string;
  validationParams?: any;
  validationFunction?: any;
  message: string;
}
export interface FieldConfig {
  name: string;
  type: string;
  component?: string;
  label?: string;
  inputType?: string;
  options?: string[];
  collections?: any;
  value?: any;
  validations?: Validator[];
  events?: any;

  /**
   * Style generators to use.
   * Default is ['default'].
   */
  styles: string[];
}
