import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {MaterialComponentsModule} from '@gruppoanthea/dynamic-form-material';
import {Route, RouterModule} from '@angular/router';
import {ParentComponent} from './parent.component';
import {
  createAsyncValidator,
  CustomValidators,
  DynamicFormModule,
  gridStyleGenerator,
} from '@gruppoanthea/dynamic-form';

const customValidators: CustomValidators = {
  'custom': createAsyncValidator('custom',
      fieldValue => /^ciao$/.test(fieldValue)),
};

const routes: Route[] = [
  {
    path: '',
    component: ParentComponent,
    pathMatch: 'full',
  },
  {
    path: 'child',
    loadChildren: '../child-component/child.module#ChildModule',
  },
];

@NgModule({
  declarations: [AppComponent, ParentComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DynamicFormModule.forRoot({
      customValidators,
      styleGenerators: {
        'default': () => ({'margin': '8px 8px'}),
        'grid': gridStyleGenerator,
      },
    }),
    MaterialComponentsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {
}
