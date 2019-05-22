import {Component, OnInit} from '@angular/core';
import {BaseFieldComponent} from '@gruppoanthea/dynamic-form';

@Component({
  selector: 'app-checkbox',
  template: `
      <div [formGroup]="group">
          <mat-checkbox [formControlName]="field.name">{{field.label}}</mat-checkbox>
      </div>
  `,
  styles: []
})
export class MaterialCheckboxComponent extends BaseFieldComponent implements OnInit {
  ngOnInit() {
  }
}
