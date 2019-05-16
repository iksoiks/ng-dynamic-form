import {AbstractControl, FormControl} from '@angular/forms';

export function createDynamicValidator(callback) {
  function validator(c: FormControl) {
    const callbackResult = callback(c.value);
    return callbackResult ? null : {validator: {valid: false}};
  }

  return validator;
}

export function createAsyncValidator(name: string, callback: (control: any) => boolean) {
  return (control: AbstractControl) => callback(control.value) ? null : {[name]: true};
}
