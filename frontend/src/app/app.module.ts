import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NebularModule} from "./nebular.module";
import {CoreModule} from "./modules/core/core.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    NebularModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
