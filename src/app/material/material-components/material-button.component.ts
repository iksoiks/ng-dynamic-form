import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-button',
  template: `
      <div class="demo-full-width margin-top" [formGroup]="group">
          <button type="submit" mat-raised-button color="primary">{{field.label}}</button>
      </div>
  `,
  styles: []
})
export class MaterialButtonComponent implements OnInit {
  field;
  group: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }
}
