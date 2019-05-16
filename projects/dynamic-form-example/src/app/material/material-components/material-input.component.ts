import {Component, OnInit} from '@angular/core';
import {BaseFieldComponent} from 'projects/dynamic-form/src/public_api';

@Component({
  selector: 'app-input',
  template: `
      <mat-form-field class="demo-full-width" [formGroup]="group">
          <input matInput [formControlName]="field.name" [placeholder]="field.label" [type]="field.inputType"
                 (keyup)="field.events?.keyUp($event)">
          <ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
              <mat-error *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</mat-error>
          </ng-container>
      </mat-form-field>
  `,
  styles: []
})
export class MaterialInputComponent extends BaseFieldComponent implements OnInit {
  ngOnInit() {
  }
}
