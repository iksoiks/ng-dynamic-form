import { NgModule } from '@angular/core';

import {MaterialButtonComponent} from './material-components/material-button.component';
import {MaterialRadiobuttonComponent} from './material-components/material-radiobutton.component';
import {MaterialSelectComponent} from './material-components/material-select.component';
import {MaterialInputComponent} from './material-components/material-input.component';
import {MaterialDateComponent} from './material-components/material-date.component';
import {MaterialCheckboxComponent} from './material-components/material-checkbox.component';

import ComponentMapper from '../../dynamic-form/ComponentMapper';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material.module';

const customComponents = {
  input: MaterialInputComponent,
  button: MaterialButtonComponent,
  select: MaterialSelectComponent,
  date: MaterialDateComponent,
  radiobutton: MaterialRadiobuttonComponent,
  checkbox: MaterialCheckboxComponent
};
ComponentMapper.getInstance().addComponents(customComponents);

@NgModule({
  declarations: [
    MaterialButtonComponent,
    MaterialCheckboxComponent,
    MaterialDateComponent,
    MaterialInputComponent,
    MaterialRadiobuttonComponent,
    MaterialSelectComponent,
  ],
  entryComponents: [
    MaterialButtonComponent,
    MaterialCheckboxComponent,
    MaterialDateComponent,
    MaterialInputComponent,
    MaterialRadiobuttonComponent,
    MaterialSelectComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class MaterialComponentsModule {}
