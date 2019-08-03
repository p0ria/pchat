import {NgModule} from "@angular/core";
import {COMPONENTS} from "./components";
import {SharedModule} from "../shared/shared.module";
import {AuthRoutingModule} from "./auth-routing.module";

@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule
  ],
  declarations: [
    ...COMPONENTS
  ]
})
export class AuthModule{

}
