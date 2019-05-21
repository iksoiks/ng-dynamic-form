
# Dynamic Form  
  
Angular Dynamic form Creator  
  
## Getting Started
Install library:  
``` bash  
$ npm install --save @kernel/dynamic-form  
```  
  
add DynamicFormModule to app.module.ts  
  
``` typescript  
import {NgModule} from '@angular/core';    
...  
import {AppComponent} from './app.component';    
import {DynamicFormModule} from '../dynamic-form/dynamic-form.module';    
    
@NgModule({    
  declarations: [AppComponent],    
  imports: [    
    ...    
    DynamicFormModule.forRoot()  
     // or DynamicFormModule.forChild() for lazy loaded modules ,    
  ],    
  providers: [],    
  bootstrap: [AppComponent],    
})    
export class AppModule {    
}  
```  
and call it in app.component.ts:  
``` typescript 
import {Component, ViewChild} from '@angular/core';    
import {FieldConfig} from '../dynamic-form/field.interface';    
import {DynamicFormComponent} from '../dynamic-form/dynamic-form.component';    
    
@Component({    
  selector: 'app-root',    
  template: `    
    <div class="form">  
       <dynamic-form [fields]="regConfig" (submit)="submit($event)"></dynamic-form>    
    </div> `,    
  styles: []    
})    
export class AppComponent {    
  regConfig: FieldConfig[] = [];    
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;    
  constructor() {    
     window.fetch('assets/form.json', {method: 'GET'})    
       .then(res => res.json())    
       .then(res => this.regConfig = res);  
  }    
  submit(value: any) {    
     console.log(value);    
  }  
}  
```  
  
## Form Schema  
  
the form schema can be imported locally or from Backend.  
 schema structure:  
``` typescript  
export interface Validator {    
  name: string;    
  validationParams?: any;    
  validationFunction?: any;    
  message: string;    
}    
export interface FieldConfig {    
  name: string;    
  type: string;    
  label?: string;    
  inputType?: string;    
  options?: string[];    
  collections?: any;    
  value?: any;    
  validations?: Validator[];    
  events?: any[];    
}  
```  
  
example:  
``` typescript  
[    
   ...  
   {   
     "type": "input",  //required  
     "name": "name",  //required  
     "label": "Username",    
     "inputType": "text",  
     "value":"Andrea"    
     "validations": [    
       {  
        "name": "required",    
        "message": "Name Required"    
       },    
       {  
        "name": "custom",    
        "message": "only 'ciao'"    
       },  
       ...  
    }  
]  
```  
  
  
## Add Custom Field Component  
  
you can add a custom component to populate your form.
your component MUST extends the "BaseFieldComponent"  that have 
field and group default variables.
you had to add `[formGroup] = "group"` attribute to the firs tag of your component
in the field variable you have all form field's data.

 custom-component.ts  
``` typescript  
import { Component, OnInit, Input } from '@angular/core';    
import { FormControl } from '@angular/forms';    
    
@Component({    
  selector: 'app-custom-component',    
  template: `  
  <div [formGroup]="group">    
    <label>{{field.label}}: </label>    
    <input [formControlName]="field.name" [placeholder]="field.label" [type]="field.inputType">    
    <ng-container *ngFor="let validation of field.validations;" ngProjectAs="div">    
       <div *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</div>    
    </ng-container>  
 </div>  
  `,    
})    
export class CustomFieldComponent extends BaseFieldComponent implements OnInit {
	ngOnInit() {}
}  
```  
in order to add custom components in form schema you need to  
 add it to DynamicFormModule:  
```  typescript
...   
import {CustomFieldComponent} from './form-components/custom.component';    
    
    
const customComponents = {    
  'custom': CustomFieldComponent    
};    
  
@NgModule({    
  declarations: [  
  ...  
  CustomFieldComponent  
  ],    
  ...     
  imports: [    
    DynamicFormModule.forRoot({customComponents}),    
  ]  
})    
export class AppModule {    
}  
```  
## Add Custom Validator  
create custom validators with `createAsyncValidator` function  
in order to add custom validators in form schema you need to add it to ValidatorMapper Singleton:  
``` typescript  
...   
import {createAsyncValidator} from '@dynamic-form';    
    
 ...   
  const customValidators = {    
    'custom': createAsyncValidator('custom', fieldValue => /^ciao$/.test(fieldValue))    
  };    
@NgModule({    
  declarations: [  
  ...  
  CustomFieldComponent  
  ],    
  ...     
  imports: [    
      DynamicFormModule.forRoot({customComponents, customValidators}),    
   ]  
})    
export class AppModule {    
}  
```  
  
custom Components and Validators can be used in form schema.
