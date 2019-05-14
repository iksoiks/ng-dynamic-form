import {InputComponent} from './input-types/input.component';
import {ButtonComponent} from './input-types/button.component';
import {SelectComponent} from './input-types/select.component';
import {RadiobuttonComponent} from './input-types/radiobutton.component';

export default class ComponentMapper {
  private static instance: ComponentMapper;
  _components;

  constructor() {
    this._components = {
      input: InputComponent,
      button: ButtonComponent,
      select: SelectComponent,
      radiobutton: RadiobuttonComponent,
    };
  }
  static getInstance(): ComponentMapper {
    if (!ComponentMapper.instance) {
      ComponentMapper.instance = new ComponentMapper();
    }

    return ComponentMapper.instance;
  }

  get components() {
    return this._components;
  }

  addComponents(customComponents) {
    this._components = {...this._components, ...customComponents};
  }
}
