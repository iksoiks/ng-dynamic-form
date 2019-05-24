# DynamicFormMaterial

```typescript
npm install --save @angular/material @angular/material-moment-adapter
npm install --save @gruppoanthea/dynamic-form-material
```

```typescript
import {MaterialComponentsModule} from '@gruppoanthea/dynamic-form-material';

@NgModule({
  imports: [
    MaterialComponentsModule
  ],
})
export class AppModule {}
```

```typescript
import {CustomComponents, DynamicFormModule} from '@gruppoanthea/dynamic-form';
import {
  MaterialButtonComponent,
  MaterialCheckboxComponent,
  MaterialDateComponent,
  MaterialInputComponent,
  MaterialRadiobuttonComponent,
  MaterialSelectComponent
} from '@gruppoanthea/dynamic-form-material';

const customComponents: CustomComponents = {
  'input': MaterialInputComponent,
  'button': MaterialButtonComponent,
  'select': MaterialSelectComponent,
  'date': MaterialDateComponent,
  'radiobutton': MaterialRadiobuttonComponent,
  'checkbox': MaterialCheckboxComponent,
};

const forRoot = DynamicFormModule.forRoot({
  customComponents
});

export {forRoot as DynamicFormModule};
```
