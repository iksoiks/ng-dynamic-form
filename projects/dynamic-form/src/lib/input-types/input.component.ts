import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FieldConfig} from '../field.interface';

@Component({
  selector: 'app-input',
  template: `
      <div [formGroup]="group">
          <label>{{field.label}}: </label>
          <input [formControlName]="field.name" [placeholder]="field.label" [type]="field.inputType">
          <ng-container *ngFor="let validation of field.validations;">
              <div *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</div>
          </ng-container>
      </div>
  `,
  styles: []
})
export class InputComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }
}
