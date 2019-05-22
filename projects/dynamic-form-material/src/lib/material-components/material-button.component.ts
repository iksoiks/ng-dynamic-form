import {Component, OnInit} from '@angular/core';
import {BaseFieldComponent} from '@gruppoanthea/dynamic-form';

@Component({
  selector: 'app-button',
  template: `
      <div [formGroup]="group">
          <button type="submit" mat-raised-button color="primary">{{field.label.toUpperCase()}}</button>
      </div>
  `,
  styles: []
})
export class MaterialButtonComponent extends BaseFieldComponent implements OnInit {
  ngOnInit() {
  }
}
