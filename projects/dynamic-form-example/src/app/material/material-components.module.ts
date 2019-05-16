import { NgModule } from '@angular/core';

import {MaterialButtonComponent} from './material-components/material-button.component';
import {MaterialRadiobuttonComponent} from './material-components/material-radiobutton.component';
import {MaterialSelectComponent} from './material-components/material-select.component';
import {MaterialInputComponent} from './material-components/material-input.component';
import {MaterialDateComponent} from './material-components/material-date.component';
import {MaterialCheckboxComponent} from './material-components/material-checkbox.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material.module';
import {CustomFieldComponent} from '../form-components/custom.component';

@NgModule({
  declarations: [
    CustomFieldComponent,
    MaterialButtonComponent,
    MaterialCheckboxComponent,
    MaterialDateComponent,
    MaterialInputComponent,
    MaterialRadiobuttonComponent,
    MaterialSelectComponent,
  ],
  exports: [
    CustomFieldComponent,
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
