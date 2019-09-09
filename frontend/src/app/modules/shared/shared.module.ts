import {NgModule} from "@angular/core";
import {
  NbActionsModule, NbCardModule, NbChatModule, NbContextMenuModule,
  NbIconModule,
  NbLayoutModule,
  NbMenuModule, NbSearchModule,
  NbSidebarModule,
  NbThemeModule, NbUserModule
} from "@nebular/theme";
import {NbEvaIconsModule} from "@nebular/eva-icons";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialModule} from "../material/material.module";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

const NB_MODULES = [
  NbThemeModule,
  NbLayoutModule,
  NbEvaIconsModule,
  NbSidebarModule,
  NbMenuModule,
  NbIconModule,
  NbActionsModule,
  NbUserModule,
  NbSearchModule,
  NbContextMenuModule,
  NbCardModule,
  NbChatModule
];

@NgModule({
  exports: [
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    CommonModule,
    NB_MODULES
  ]
})
export class SharedModule {

}
