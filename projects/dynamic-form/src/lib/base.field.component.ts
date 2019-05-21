import {Component, ElementRef, HostBinding, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FieldConfig} from './models/field.interface';

@Component({
  selector: 'base-field',
  template: '',
})
export class BaseFieldComponent {
  field: FieldConfig;
  group: FormGroup;

  elementRef: ElementRef;

  constructor() {
  }

  applyStyle(style) {
    for (const key in style) {
      if (!style.hasOwnProperty(key)) { continue; }
      this.elementRef.nativeElement.style[key] = style[key];
    }
  }

}
