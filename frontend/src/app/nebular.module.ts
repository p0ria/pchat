import {NgModule} from "@angular/core";
import {
  NbButtonModule,
  NbCardModule, NbDialogModule, NbIconModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbThemeModule,
} from "@nebular/theme";
import {NbEvaIconsModule} from "@nebular/eva-icons";

@NgModule({
  imports: [
    NbThemeModule.forRoot({ name: 'default' }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDialogModule.forRoot()
  ],
  exports: [
    NbThemeModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule,
    NbButtonModule,
    NbMenuModule,
    NbCardModule,
    NbIconModule,
    NbDialogModule
  ]
})
export class NebularModule{

}
