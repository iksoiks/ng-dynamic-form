import {Component, OnInit} from '@angular/core';
import {BaseFieldComponent} from '@gruppoanthea/dynamic-form';

@Component({
  selector: 'app-date',
  template: `
      <mat-form-field [formGroup]="group" floatLabel="always">
          <input matInput [matDatepicker]="picker" [formControlName]="field.name" [placeholder]="field.label">
          <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
          <mat-datepicker #picker></mat-datepicker>
          <mat-hint></mat-hint>
          <ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
              <mat-error *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</mat-error>
          </ng-container>
      </mat-form-field>
  `,
  styles: [
      `mat-form-field {
          display: block;
      }`,
  ]
})
export class MaterialDateComponent extends BaseFieldComponent implements OnInit {
  ngOnInit() {
  }
}
