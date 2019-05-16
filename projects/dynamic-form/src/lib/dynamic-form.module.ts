import {
  ANALYZE_FOR_ENTRY_COMPONENTS,
  Inject, InjectFlags, InjectionToken, Injector,
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';

import { InputComponent } from './input-types/input.component';
import { ButtonComponent } from './input-types/button.component';
import { SelectComponent } from './input-types/select.component';
import { RadiobuttonComponent } from './input-types/radiobutton.component';
import { DynamicFieldDirective } from './dynamic-field.directive';
import { DynamicFormComponent } from './dynamic-form.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { Config } from './models';
import { ConfigOptions, ConfigToken } from './config.options';
export const FORROOT_GUARD = new InjectionToken<void>('FORROOT_GUARD');
export class Guard {
  constructor() {}
  get() {
    return 'guarded';
  }
}


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
    CommonModule,
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

  constructor(@Optional() @Inject(FORROOT_GUARD) token: any, @Optional() guard: Guard) {}

  static forRoot(config?: Config): ModuleWithProviders<DynamicFormModule> {
    return {
      ngModule: DynamicFormModule,
      providers: [
        {
          provide: Guard,
          useClass: Guard
        },
        {
          provide: FORROOT_GUARD,
          useFactory: (guard: Guard) => {
            if (guard) {
              // tslint:disable-next-line: max-line-length
              throw new Error(`DynamicFormLibModule.forRoot() called twice. Lazy loaded modules should use DynamicFormLibModule.forChild() instead.`);
            }
            return new Guard().get();
          },
          deps: [[Guard, new Optional(), new SkipSelf()]]
        },
        {
          provide: ANALYZE_FOR_ENTRY_COMPONENTS,
          multi: true,
          useValue: config
        },
        {
          provide: ConfigToken,
          useValue: config
        },
        ConfigOptions
      ]
    };
  }

  static forChild(config?: Config): ModuleWithProviders<DynamicFormModule> {
    return {
      ngModule: DynamicFormModule,
      providers: [
        {
          provide: ANALYZE_FOR_ENTRY_COMPONENTS,
          multi: true,
          useValue: config
        },
        {
          provide: ConfigToken,
          useValue: config
        },
        {
          provide: ConfigOptions,
          useFactory: (injector: Injector) => {
            const confSrv = injector.get(ConfigOptions, new ConfigOptions(config), InjectFlags.SkipSelf);
            confSrv.mergeConfig(config);
            return confSrv;
          },
          deps: [Injector]
        }
      ]
    };
  }
}

