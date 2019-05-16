import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../field.interface';
@Component({
  selector: 'app-radiobutton',
  template: `
<div [formGroup]="group">
    <label>{{field.label}}: </label>
      <div *ngFor="let item of field.options">
          <input type="radio" [formControlName]="field.name" [value]="item">{{item}}<br>
      </div>
</div>
`,
})
export class RadiobuttonComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
