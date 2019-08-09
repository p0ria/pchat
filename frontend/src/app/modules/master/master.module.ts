import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {COMPONENTS} from "./components";
import {MasterRoutingModule} from "./master-routing.module";
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    MasterRoutingModule,
    SharedModule
  ],
  declarations: [
    ...COMPONENTS,
    HeaderComponent,
  ]
})
export class MasterModule{

}
