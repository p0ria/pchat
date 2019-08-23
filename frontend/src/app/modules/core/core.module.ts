import {NgModule} from "@angular/core";
import {PROVIDERS} from "./services";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    ...PROVIDERS
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

  ]
})
export class CoreModule {

}
