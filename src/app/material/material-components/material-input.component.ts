import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-input',
  template: `
      <mat-form-field class="demo-full-width" [formGroup]="group">
          <input matInput [formControlName]="field.name" [placeholder]="field.label" [type]="field.inputType"
                 (keyup)="field.events?.keyUp($event)">
          <ng-container *ngFor="let validation of field.validations;">
              <mat-error *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</mat-error>
          </ng-container>
      </mat-form-field>
  `,
  styles: []
})
export class MaterialInputComponent implements OnInit {
  field;
  group: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }
}
