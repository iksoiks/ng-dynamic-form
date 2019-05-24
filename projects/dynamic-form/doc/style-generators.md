# Style generators

Style generators are _functions_ like this:

```javascript
function myStyleGenerator (field) {
  return {
    'maxWidth': '20px'
  }
}
```

They gets field configuration and returns a set of styles 
that will be added to the root of a `*FieldComponent`.

## Set your style generators

Declare them in your App module:

```typescript
import {
  DynamicFormModule,
  gridStyleGenerator,
} from '@gruppoanthea/dynamic-form';

@NgModule({

  imports: [
      
    DynamicFormModule.forRoot({
      styleGenerators: {
        'default': (field) => ({'margin': '8px 8px'}),
        'grid': gridStyleGenerator,
      },
    }),
    
  ],
  
})
```

## Use them in your Form Schema

```json
{
  "type": "input",
  "styles": [
    "default",
    "grid"
  ]
}
```
  
Note that ```"default"``` style generator is applied to every form field that 
has not defined the `styles` property.

## See also
[Grid style generator](./grid.style-generator.md)  
