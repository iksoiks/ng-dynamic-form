import {NgModule} from '@angular/core';

import {ChildComponent} from './child.component';
import {CustomFieldComponent} from '../app/form-components/custom.component';
import {MaterialComponentsModule} from '../app/material/material-components.module';
import {DynamicFormModule, CustomComponents } from '@gruppoanthea/dynamic-form';
import {Route, RouterModule} from '@angular/router';
import {MaterialInputComponent} from '../app/material/material-components/material-input.component';
import {MaterialButtonComponent} from '../app/material/material-components/material-button.component';
import {MaterialSelectComponent} from '../app/material/material-components/material-select.component';
import {MaterialDateComponent} from '../app/material/material-components/material-date.component';
import {MaterialRadiobuttonComponent} from '../app/material/material-components/material-radiobutton.component';
import {MaterialCheckboxComponent} from '../app/material/material-components/material-checkbox.component';

const customComponents: CustomComponents = {
  'mat-input': MaterialInputComponent,
  'mat-button': MaterialButtonComponent,
  'mat-select': MaterialSelectComponent,
  'mat-date': MaterialDateComponent,
  'mat-radiobutton': MaterialRadiobuttonComponent,
  'mat-checkbox': MaterialCheckboxComponent,
  'mat-custom': CustomFieldComponent
};

const routes: Route[] = [{
  path: '',
  component: ChildComponent,
  pathMatch: 'full'

}];
@NgModule({
  declarations: [ChildComponent],
  imports: [
    DynamicFormModule.forChild({
      customComponents,
      styleGenerators: {
        'shadow': (field) => {
          console.log(field);
          return ({
            boxShadow: '1px 1px 2px black'
          });
        }
      }
    }),
    MaterialComponentsModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  exports: [RouterModule]
})
export class ChildModule {
}
