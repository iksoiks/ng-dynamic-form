import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {CustomFieldComponent} from './form-components/custom.component';
import {MaterialComponentsModule} from './material/material-components.module';
import {DynamicFormModule, createAsyncValidator } from 'projects/dynamic-form/src/public_api';
import {Route, RouterModule} from '@angular/router';
import {MaterialInputComponent} from './material/material-components/material-input.component';
import {MaterialButtonComponent} from './material/material-components/material-button.component';
import {MaterialSelectComponent} from './material/material-components/material-select.component';
import {MaterialDateComponent} from './material/material-components/material-date.component';
import {MaterialRadiobuttonComponent} from './material/material-components/material-radiobutton.component';
import {MaterialCheckboxComponent} from './material/material-components/material-checkbox.component';
import {ParentComponent} from './parent.component';

const customComponents = {
  custom: CustomFieldComponent,
  input: MaterialInputComponent,
  button: MaterialButtonComponent,
  select: MaterialSelectComponent,
  date: MaterialDateComponent,
  radiobutton: MaterialRadiobuttonComponent,
  checkbox: MaterialCheckboxComponent
};
const customValidators = {
  'custom': createAsyncValidator('custom', fieldValue => /^ciao$/.test(fieldValue))
};
// ValidatorMapper.getInstance().addValidators(customValidators);

const routes: Route[] = [
  {
    path: '',
    component: ParentComponent,
    pathMatch: 'full',
  },
  {
    path: 'child',
    loadChildren: '../child-component/child.module#ChildModule'
  }
];


@NgModule({
  declarations: [AppComponent, ParentComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DynamicFormModule.forRoot({customValidators}),
    MaterialComponentsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
