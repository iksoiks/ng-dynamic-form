import {Component, ViewChild} from '@angular/core';
import {FieldConfig, DynamicFormComponent} from 'projects/dynamic-form/src/public_api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-parent',
  template: `
    <a [routerLink]="['/child']">GOTOCHILD</a>
      <div class="form">
          <dynamic-form [fields]="regConfig" (submit)="submit($event)"></dynamic-form>
      </div>
  `,
  styles: []
})
export class ParentComponent {
  regConfig: FieldConfig[] = [];
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  constructor(public router: Router) {
    window.fetch('assets/form.json', {method: 'GET'})
      .then(res => res.json())
      .then(res => {
        const fieldsByName = {};
        res.map(field => fieldsByName[field.name] = field);
        fieldsByName['name'].events = {
          keyUp: (evt) => {
            if (evt.target.value.length === 3) {
              fieldsByName['country'].options.push('India', 'UK', 'UAE', 'US');
            } else if (evt.target.value.length === 0) {
              fieldsByName['country'].options = [];
            }
          }
        };
        this.regConfig = res;
      });
  }

  submit(value: any) {
    console.log(value);
  }
}
