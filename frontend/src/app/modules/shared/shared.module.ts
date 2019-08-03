import {NgModule} from "@angular/core";
import {
  NbButtonModule,
  NbCardModule, NbIconModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbThemeModule
} from "@nebular/theme";
import {NbEvaIconsModule} from "@nebular/eva-icons";

@NgModule({
  exports: [
    NbThemeModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule,
    NbButtonModule,
    NbMenuModule,
    NbCardModule,
    NbIconModule,
  ]
})
export class SharedModule {

}
