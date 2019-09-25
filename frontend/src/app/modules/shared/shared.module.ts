import {NgModule} from "@angular/core";
import {
  NbActionsModule, NbButtonModule, NbCardModule, NbChatModule, NbContextMenuModule, NbDialogModule,
  NbIconModule, NbInputModule,
  NbLayoutModule,
  NbMenuModule, NbSearchModule,
  NbSidebarModule,
  NbThemeModule, NbTooltipModule, NbUserModule
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
  NbChatModule,
  NbButtonModule,
  NbTooltipModule,
  NbActionsModule,
  NbDialogModule,
  NbInputModule
];

@NgModule({
  imports: [
    NbDialogModule.forChild({})
  ],
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
