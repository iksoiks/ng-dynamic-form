import {
  ComponentFactoryResolver,
  Directive,
  Input,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FieldConfig} from './models/field.interface';
import {ConfigOptions} from './config.options';
import {InputComponent} from './input-types/input.component';
import {ButtonComponent} from './input-types/button.component';
import {SelectComponent} from './input-types/select.component';
import {RadiobuttonComponent} from './input-types/radiobutton.component';
import {LineBreakComponent} from '@gruppoanthea/dynamic-form/lib/input-types/line-break.component';

@Directive({
  selector: '[dynamicField]',
})
export class DynamicFieldDirective implements OnInit {
  @Input() field: FieldConfig;

  @Input() group: FormGroup;

  componentRef: any;

  defaultComponents = {
    'input': InputComponent,
    'date': InputComponent,
    'button': ButtonComponent,
    'select': SelectComponent,
    'radiobutton': RadiobuttonComponent,
    'checkbox': InputComponent,
    'line-break': LineBreakComponent,
  };

  constructor(
      private resolver: ComponentFactoryResolver,
      private container: ViewContainerRef,
      private config: ConfigOptions,
  ) {
  }

  ngOnInit() {
    const {
      customComponents,
      styleGenerators = {},
    } = this.config.getConfig();

    const components = {...this.defaultComponents, ...customComponents};
    const factory = this.resolver.resolveComponentFactory(
        components[this.field.component || this.field.type],
    );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
    this.componentRef.instance.elementRef = this.componentRef.location;

    if (!styleGenerators['default']) {
      styleGenerators['default'] = () => ({});
    }

    if (this.field.styles === null || this.field.styles === undefined) {
      this.field.styles = ['default'];
    }

    for (const style of this.field.styles) {
      if (typeof styleGenerators[style] !== 'function') {
        console.error(
            `[Dynamic Form] Style "${style}" is not defined inside your configuration's styleGenerators`);
        return;
      }
      this.componentRef.instance.applyStyle(styleGenerators[style](this.field));
    }
  }
}
