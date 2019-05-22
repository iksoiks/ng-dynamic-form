import {NgModule} from '@angular/core';

import {ChildComponent} from './child.component';
import {CustomFieldComponent} from '../app/form-components/custom.component';
import {
  MaterialButtonComponent,
  MaterialCheckboxComponent,
  MaterialComponentsModule,
  MaterialDateComponent,
  MaterialInputComponent,
  MaterialRadiobuttonComponent,
  MaterialSelectComponent,
} from '@gruppoanthea/dynamic-form-material';
import {CustomComponents, DynamicFormModule} from '@gruppoanthea/dynamic-form';
import {Route, RouterModule} from '@angular/router';

const customComponents: CustomComponents = {
  'mat-input': MaterialInputComponent,
  'mat-button': MaterialButtonComponent,
  'mat-select': MaterialSelectComponent,
  'mat-date': MaterialDateComponent,
  'mat-radiobutton': MaterialRadiobuttonComponent,
  'mat-checkbox': MaterialCheckboxComponent,
  'mat-custom': CustomFieldComponent,
};

const routes: Route[] = [
  {
    path: '',
    component: ChildComponent,
    pathMatch: 'full',

  }];

@NgModule({
  declarations: [
    ChildComponent,
    CustomFieldComponent,
  ],
  imports: [
    DynamicFormModule.forChild({
      customComponents,
      styleGenerators: {
        'shadow': (field) => ({
          boxShadow: '1px 1px 2px black',
        }),
      },
    }),
    MaterialComponentsModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
  exports: [RouterModule],
})
export class ChildModule {
}
