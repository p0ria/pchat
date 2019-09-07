import {NgModule} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./state";
import {EffectsModule} from "@ngrx/effects";
import {AppEffects} from "./state/app.effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";

@NgModule({
  imports:[
    StoreModule.forRoot(reducers),
    EffectsModule.forFeature([AppEffects]),
    StoreDevtoolsModule.instrument({
      name: 'PChat Website',
      maxAge: 25,
      logOnly: environment.production
    })
  ]
})
export class NgrxModule{}
