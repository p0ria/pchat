import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RoomsComponent} from "./components/rooms/rooms.component";
import {RoomComponent} from "./components/room/room.component";

const routes: Routes = [
  { path: '', component: RoomsComponent, pathMatch: 'full' },
  { path: ':id', component: RoomComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule {}
