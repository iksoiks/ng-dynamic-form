import {Validators} from '@angular/forms';
import {createDynamicValidator} from './dynamic-form.lib';

export default class ValidatorMapper {
  private static instance: ValidatorMapper;
  _validators;

  constructor() {
    this._validators = {
      required: Validators.required,
      pattern: Validators.pattern(''),
      custom: createDynamicValidator(fieldValue => /^ciao$/.test(fieldValue))
    };
  }
  static getInstance(): ValidatorMapper {
    if (!ValidatorMapper.instance) {
      ValidatorMapper.instance = new ValidatorMapper();
    }

    return ValidatorMapper.instance;
  }

  get validators() {
    return this._validators;
  }

  addValidators(customValidators) {
    this._validators = {...this._validators, ...customValidators};
  }
}
