import {Component, OnInit} from '@angular/core';
import {BaseFieldComponent} from '@gruppoanthea/dynamic-form';

@Component({
  selector: 'app-radiobutton',
  template: `
      <div [formGroup]="group">
          <label>{{field.label}}:</label>
          <mat-radio-group [formControlName]="field.name">
              <mat-radio-button *ngFor="let item of field.options"
                                [value]="item">{{item}}</mat-radio-button>
          </mat-radio-group>
      </div>
  `,
  styles: [
      `.mat-radio-button {
          margin: 0 12px;
      }`,
  ],
})
export class MaterialRadiobuttonComponent extends BaseFieldComponent implements OnInit {
  ngOnInit() {
  }
}
