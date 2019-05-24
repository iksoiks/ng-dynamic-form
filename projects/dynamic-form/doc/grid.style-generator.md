## Grid style generator

Auto generate style based on field properties using **CSS Flex**.

## Import

```typescript
import {gridStyleGenerator} from '@gruppoanthea/dynamic-form';
```

## Form Schema properties

- `grid`: _Object_.
  - `type`: _Boolean_ - Auto generate styles based on field type. (Default: `true`)
  - `validations`: _Boolean_ -  Auto generate styles based on field validations. (Default: `true`)
  - `style`:  _Object_ - Override generated style. Please, use it only if it's the last chance.
  
