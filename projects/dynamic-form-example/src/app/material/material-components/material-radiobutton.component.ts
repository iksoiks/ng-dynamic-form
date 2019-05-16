import { Component, OnInit } from '@angular/core';
import {BaseFieldComponent} from 'projects/dynamic-form/src/public_api';

@Component({
  selector: 'app-radiobutton',
  template: `
<div class="demo-full-width margin-top" [formGroup]="group">
  <label class="radio-label-padding">{{field.label}}:</label>
  <mat-radio-group [formControlName]="field.name">
    <mat-radio-button *ngFor="let item of field.options" [value]="item">{{item}}</mat-radio-button>
  </mat-radio-group>
</div>
`,
  styles: [`
    .radio-label-padding {
      padding-right: 10px;
      color: grey;
    }
  `]
})
export class MaterialRadiobuttonComponent extends BaseFieldComponent implements OnInit {
  ngOnInit() {
  }
}
