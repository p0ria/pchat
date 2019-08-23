import {NgModule} from "@angular/core";
import {COMPONENTS} from "./components";
import {SharedModule} from "../shared/shared.module";
import {AuthRoutingModule} from "./auth-routing.module";
import {StoreModule} from "@ngrx/store";
import {reducer} from "./state/auth.reducers";
import {AuthEffects} from "./state/auth.effects";
import {EffectsModule} from "@ngrx/effects";

@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [
    ...COMPONENTS
  ]
})
export class AuthModule{

}
