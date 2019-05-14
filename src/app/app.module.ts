import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {DynamicFormModule} from '../dynamic-form/dynamic-form.module';
import ComponentMapper from '../dynamic-form/ComponentMapper';
import {CustomFieldComponent} from './form-components/custom.component';
import {MaterialComponentsModule} from './material/material-components.module';
import {createAsyncValidator} from '../dynamic-form/dynamic-form.lib';
import ValidatorMapper from '../dynamic-form/ValidatorsMapper';


const customComponents = {
  'custom': CustomFieldComponent
};
ComponentMapper.getInstance().addComponents(customComponents);
const customValidators = {
  'custom': createAsyncValidator('custom', fieldValue => /^ciao$/.test(fieldValue))
};
ValidatorMapper.getInstance().addValidators(customValidators);

@NgModule({
  declarations: [AppComponent, CustomFieldComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DynamicFormModule,
    MaterialComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    CustomFieldComponent,
  ]
})
export class AppModule {
}
