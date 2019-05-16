import {
  ComponentFactoryResolver,
  Directive,
  Input,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FieldConfig} from './field.interface';
import {ConfigOptions} from './config.options';
import {InputComponent} from './input-types/input.component';
import {ButtonComponent} from './input-types/button.component';
import {SelectComponent} from './input-types/select.component';
import {RadiobuttonComponent} from './input-types/radiobutton.component';

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input() field: FieldConfig;
  @Input() group: FormGroup;
  componentRef: any;
  defaultComponents = {
    input: InputComponent,
    date: InputComponent,
    button: ButtonComponent,
    select: SelectComponent,
    radiobutton: RadiobuttonComponent,
    checkbox:  InputComponent
  };
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef,
    private config: ConfigOptions
  ) {
  }

  ngOnInit() {
    const {customComponents} = this.config.getConfig();
    const components = {...this.defaultComponents, ...customComponents};
    const factory = this.resolver.resolveComponentFactory(
      components[this.field.type]
    );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }
}
