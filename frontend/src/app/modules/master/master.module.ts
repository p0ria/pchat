import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {COMPONENTS} from "./components";
import {MasterRoutingModule} from "./master-routing.module";
import {StoreModule} from "@ngrx/store";

@NgModule({
  imports: [
    MasterRoutingModule,
    SharedModule,
    StoreModule.forFeature('master', {})
  ],
  declarations: [
    ...COMPONENTS,
  ]
})
export class MasterModule{

}
