import {NgModule} from "@angular/core";
import {JoinRoutingModule} from "./join-routing.module";
import {SharedModule} from "../shared/shared.module";
import {Store, StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {COMPONENTS} from "./components";
import {reducer} from "./state/join.reducers";
import {JoinEffects} from "./state/join.effects";
import {NbToastrService} from "@nebular/theme";
import * as fromJoin from "./state/join.reducers"
import * as joinSelectors from "./state/join.selectors";

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
  constructor(
    private store: Store<fromJoin.State>,
    private toasterService: NbToastrService){
    this.store.select(joinSelectors.getError).subscribe(
      err => {
        if(err)
          toasterService.danger(err);
      }
    )
  }
}
