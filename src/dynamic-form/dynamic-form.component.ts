import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {FieldConfig} from './field.interface';
import ValidatorsMapper from './ValidatorsMapper';

@Component({
  exportAs: 'dynamicForm',
  selector: 'dynamic-form',
  template: `
      <form class="dynamic-form" [formGroup]="form" (submit)="onSubmit($event)" (cancel)="onCancel($event)">
          <ng-container *ngFor="let field of fields;" dynamicField [field]="field" [group]="form"></ng-container>
      </form>
  `,
  styles: []
})
export class DynamicFormComponent implements OnInit, OnChanges {
  @Input() fields: FieldConfig[] = [];

  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();

  validatorMapper = ValidatorsMapper.getInstance();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
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
    const defaultValidators = {
      'required': Validators.required,
      'pattern': Validators.pattern(validationParams)
    };
    const validators = {...defaultValidators, ...this.validatorMapper.validators};
    return validators[name];
  }


}

