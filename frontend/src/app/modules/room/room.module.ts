import {NgModule} from "@angular/core";
import {RoomRoutingModule} from "./room-routing.module";
import {SharedModule} from "../shared/shared.module";
import {Store, StoreModule} from "@ngrx/store";
import {COMPONENTS, DYNAMICS} from "./components";
import {reducer} from "./state/room.reducers";
import {RoomEffects} from "./state/room.effects";
import {EffectsModule} from "@ngrx/effects";
import * as roomActions from "./state/room.actions";
import * as fromRoom from "./state/room.reducers";

@NgModule({
  imports: [
    RoomRoutingModule,
    SharedModule,
    StoreModule.forFeature('room', reducer),
    EffectsModule.forFeature([RoomEffects])
  ],
  declarations: [
    COMPONENTS,
  ],
  entryComponents: [
    DYNAMICS
  ]
})
export class RoomModule{
  constructor(
    private store: Store<fromRoom.State>){
    store.dispatch(new roomActions.LoadUserRooms());
    store.dispatch(new roomActions.SubscribeToChatsSocket())
  }
}
