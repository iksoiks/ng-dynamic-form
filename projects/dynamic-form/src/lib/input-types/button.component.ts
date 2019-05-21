import {Component, OnInit} from '@angular/core';
import {BaseFieldComponent} from '../base.field.component';

@Component({
  selector: 'app-button',
  template: `
      <div [formGroup]="group">
          <button type="submit">{{field.label}}</button>
      </div>
  `,
  styles: []
})
export class ButtonComponent extends BaseFieldComponent implements OnInit {
  ngOnInit() {
  }
}
