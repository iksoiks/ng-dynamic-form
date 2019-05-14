import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  template: `
      <div class="demo-full-width margin-top" [formGroup]="group">
          <mat-checkbox [formControlName]="field.name">{{field.label}}</mat-checkbox>
      </div>
  `,
  styles: []
})
export class MaterialCheckboxComponent implements OnInit {
  field;
  group: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }
}
