import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {COMPONENTS} from "./components";
import {MasterRoutingModule} from "./master-routing.module";

@NgModule({
  imports: [
    MasterRoutingModule,
    SharedModule
  ],
  declarations: [
    ...COMPONENTS,
  ]
})
export class MasterModule{

}
