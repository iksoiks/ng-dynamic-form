import {Component, OnInit} from '@angular/core';
import {BaseFieldComponent} from '@gruppoanthea/dynamic-form';

@Component({
  selector: 'app-button',
  template: `
      <div class="demo-full-width margin-top" [formGroup]="group">
          <button type="submit" mat-raised-button color="primary">{{field.label}}</button>
      </div>
  `,
  styles: []
})
export class MaterialButtonComponent extends BaseFieldComponent implements OnInit {
  ngOnInit() {
  }
}
