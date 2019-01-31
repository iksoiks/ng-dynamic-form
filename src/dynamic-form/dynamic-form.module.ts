import { NgModule } from '@angular/core';

import { InputComponent } from './input-types/input/input.component';
import { ButtonComponent } from './input-types/button/button.component';
import { SelectComponent } from './input-types/select/select.component';
import { DateComponent } from './input-types/date/date.component';
import { RadiobuttonComponent } from './input-types/radiobutton/radiobutton.component';
import { CheckboxComponent } from './input-types/checkbox/checkbox.component';
import { DynamicFieldDirective } from './dynamic-field.directive';
import { DynamicFormComponent } from './dynamic-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MaterialModule} from '../modules/material.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    DynamicFieldDirective,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  entryComponents: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent
  ],
  exports: [DynamicFormComponent],
})
export class DynamicFormModule {}
