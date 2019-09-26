import {NgModule} from "@angular/core";
import {JoinRoutingModule} from "./join-routing.module";
import {SharedModule} from "../shared/shared.module";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {COMPONENTS} from "./components";
import {reducer} from "./state/join.reducers";
import {JoinEffects} from "./state/join.effects";

@NgModule({
  imports: [
    JoinRoutingModule,
    SharedModule,
    StoreModule.forFeature('join', reducer),
    EffectsModule.forFeature([JoinEffects])
  ],
  declarations: [
    COMPONENTS,
  ]
})
export class JoinModule{

}
