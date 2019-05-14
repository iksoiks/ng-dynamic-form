import { NgModule } from '@angular/core';

import { InputComponent } from './input-types/input.component';
import { ButtonComponent } from './input-types/button.component';
import { SelectComponent } from './input-types/select.component';
import { RadiobuttonComponent } from './input-types/radiobutton.component';
import { DynamicFieldDirective } from './dynamic-field.directive';
import { DynamicFormComponent } from './dynamic-form.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    RadiobuttonComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],

  entryComponents: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    RadiobuttonComponent,
    DynamicFormComponent
  ],
  exports: [DynamicFormComponent],
})
export class DynamicFormModule {
  constructor() {}
}
