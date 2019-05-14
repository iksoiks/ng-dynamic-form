import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FieldConfig} from '../field.interface';

@Component({
  selector: 'app-button',
  template: `
      <div [formGroup]="group">
          <button type="submit">{{field.label}}</button>
      </div>
  `,
  styles: []
})
export class ButtonComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }
}