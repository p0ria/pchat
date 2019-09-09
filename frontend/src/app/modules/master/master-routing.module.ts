import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MasterComponent} from "./components/master/master.component";

const routes: Routes = [
  { path: '', component: MasterComponent,
    children: [
      { path: '', redirectTo: 'rooms', pathMatch: 'full' },
      { path: 'rooms',
        loadChildren: () => import('../room/room.module').then(m => m.RoomModule)}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule {

}
