import {NgModule} from "@angular/core";
import {
  NbButtonModule,
  NbCardModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbThemeModule
} from "@nebular/theme";
import {NbEvaIconsModule} from "@nebular/eva-icons";

@NgModule({
  imports: [
    NbThemeModule.forRoot({ name: 'default' }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot()
  ],
  exports: [
    NbThemeModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    NbMenuModule,
    NbCardModule,
  ]
})
export class NebularModule{

}
