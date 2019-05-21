import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {FieldConfig} from './models/field.interface';
import {ConfigOptions} from './config.options';

@Component({
  exportAs: 'dynamicForm',
  selector: 'dynamic-form',
  template: `
      <form class="dynamic-form" [formGroup]="form" (submit)="onSubmit($event)" (cancel)="onCancel($event)">
          <ng-container *ngFor="let field of fields;" dynamicField [field]="field" [group]="form"></ng-container>
      </form>
  `,
})
export class DynamicFormComponent implements OnInit, OnChanges {
  @Input() fields: FieldConfig[] = [];

  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;

  constructor(private fb: FormBuilder, private config: ConfigOptions) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.fields && changes.fields.currentValue) {
      const fields = changes.fields.currentValue;
      this.form = this.createControl(fields);
      for (const field of fields) {
        const {name, type, value} = field;
        if (type !== 'button' && value) {
          this.form.controls[name].patchValue(value);
        }
      }
    }
  }

  patchValue(key, value) {
    if (!this.form.controls[key]) {
      return;
    }
    this.form.controls[key].patchValue(value);
  }

  getValue(key) {
    return this.form.controls[key].value;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  onCancel(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.cancel.emit(this.form.value);
  }

  createControl(fields) {
    const group = this.fb.group({});
    fields.forEach(field => {
      if (field.type === 'button') {
        return;
      }
      const control = this.fb.control(
        field.value,
        this.bindValidations(field.validations || [])
      );
      group.addControl(field.name, control);
    });
    return group;
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(this.createValidator(valid.name, valid.validationParams));
      });
      return Validators.compose(validList);
    }
    return null;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({onlySelf: true});
    });
  }

  private createValidator(name: string, validationParams?: any) {
    const getValidator = (validator: String, type: String, param: any) => {
      if (typeof param !== type) {
        throw new Error(`Invalid params for Validators.${validator}(value: ${type})`);
      }
      switch (validator) {
        case 'min':
          return Validators.min(param);
        case 'max':
          return Validators.max(param);
        case 'minLength':
          return Validators.minLength(param);
        case 'maxLength':
          return Validators.maxLength(param);
        case 'pattern':
          return Validators.pattern(param);
        default:
          return null;
      }
    };
    switch (name) {
      case 'required':
        return Validators.required;
      case 'requiredTrue':
        return Validators.requiredTrue;
      case 'email':
        return Validators.email;
      case 'min':
      case 'max':
      case 'minLength':
      case 'maxLength':
        return getValidator(name, 'number', validationParams);
      case 'pattern':
        return getValidator(name, 'string', validationParams);
      default:
        const {customValidators} = this.config.getConfig();
        return customValidators[name];
    }

  }


}

