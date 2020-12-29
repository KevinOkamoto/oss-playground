import * as userRules from './rules/user-rules';
import {MetaConfig, MetaUIRulesModule} from '@ngx-metaui/rules';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ContextPropertyPipe} from './context-property.pipe';
import { RequisitionFormComponent } from './components/requisition-form/requisition-form.component';
import { MetaObjectService } from './services/meta-object.service';

@NgModule({
  declarations: [
    AppComponent,
    ContextPropertyPipe,
    RequisitionFormComponent,
  ],
  imports: [
    BrowserModule,
    MetaUIRulesModule.forRoot(),
  ],
  providers: [MetaObjectService],
  bootstrap: [AppComponent],
})
export class AppModule {

  constructor(private config: MetaConfig) {

    // mandatory - you need to register app defined rules and types since there is no
    // introspection in js

    const rules: any[] = config.get('metaui.rules.user-rules') || [];
    rules.push(userRules);
    config.set('metaui.rules.user-rules', rules);

  }
}
