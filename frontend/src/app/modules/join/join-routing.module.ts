import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {RoomListComponent} from "./components/room-list/room-list.component";

const routes: Routes = [
  { path: '', component: RoomListComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JoinRoutingModule {}
