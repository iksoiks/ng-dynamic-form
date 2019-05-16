import {Component, OnInit} from '@angular/core';
import {BaseFieldComponent} from 'projects/dynamic-form/src/public_api';

@Component({
  selector: 'app-select',
  template: `
      <mat-form-field class="demo-full-width margin-top" [formGroup]="group">
          <mat-select [placeholder]="field.label" [formControlName]="field.name">
              <mat-option *ngFor="let item of field.options" [value]="item">{{item}}</mat-option>
          </mat-select>
      </mat-form-field>
  `,
  styles: []
})
export class MaterialSelectComponent extends BaseFieldComponent implements OnInit {
  ngOnInit() {
  }
}
