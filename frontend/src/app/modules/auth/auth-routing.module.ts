import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginContainerComponent} from "./components/login/login.container.component";

const routes: Routes = [
  {
    path: '', component: LoginContainerComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AuthRoutingModule{

}
