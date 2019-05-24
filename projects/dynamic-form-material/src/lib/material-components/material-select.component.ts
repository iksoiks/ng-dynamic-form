import {Component, OnInit} from '@angular/core';
import {BaseFieldComponent} from '@gruppoanthea/dynamic-form';

@Component({
  selector: 'app-select',
  template: `
    <mat-form-field [formGroup]="group">
      <mat-select [placeholder]="field.label" [formControlName]="field.name">
        <mat-option *ngFor="let item of field.options"
                    [value]="item">{{item}}</mat-option>
      </mat-select>
    </mat-form-field>
  `,
  styles: [
      `mat-form-field {
          display: block;
      }`,
  ],
})
export class MaterialSelectComponent extends BaseFieldComponent implements OnInit {
  ngOnInit() {
  }
}
