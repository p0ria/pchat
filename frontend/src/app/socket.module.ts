import {NgModule} from "@angular/core";
import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";

const config: SocketIoConfig = {
  url: 'http://localhost:3000', options: {transports: ['websocket']}
};

@NgModule({
  imports: [
    SocketIoModule.forRoot(config)
  ],
  exports: [
    SocketIoModule
  ]
})
export class SocketModule{}
