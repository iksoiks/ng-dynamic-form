import {Component, ViewChild} from '@angular/core';
import {FieldConfig, DynamicFormComponent} from '@gruppoanthea/dynamic-form';

@Component({
  selector: 'app-child',
  template: `
      <a [routerLink]="['']">BACKTOPARENT</a>
      <div class="form">
          <dynamic-form [fields]="regConfig" (submit)="submit($event)" [flex]="true"></dynamic-form>
      </div>
  `,
  styles: []
})
export class ChildComponent {
  regConfig: FieldConfig[] = [];
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  constructor() {
    window.fetch('assets/form-child.json', {method: 'GET'})
      .then(res => res.json())
      .then(res => {
        console.log(this.form);
        const fieldsByName = {};
        res.map(field => fieldsByName[field.name] = field);
        fieldsByName['name'].events = {
          keyUp: (evt, fieldC) => {
            if (evt.target.value.length === 3) {
              fieldsByName['validationMessage'] = 'blue';
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
