import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NebularModule} from "./nebular.module";
import {CoreModule} from "./modules/core/core.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {EffectsModule} from "@ngrx/effects";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {TokenInterceptor} from "./interceptors/token-interceptor";
import {NgrxModule} from "./ngrx.module";
import {SocketModule} from "./socket.module";
import {NbToastrModule} from "@nebular/theme";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    NebularModule,
    BrowserAnimationsModule,
    NgrxModule,
    EffectsModule.forRoot([]),
    SocketModule,
    NbToastrModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
