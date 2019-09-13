import {OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway} from "@nestjs/websockets";

@WebSocketGateway({transports: ['websocket']})
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
    handleConnection(client, ...args: any[]): any {
    }

    handleDisconnect(client): any {
    }
    
    @SubscribeMessage('chat')
    async onChat(client, chat){
        client.broadcast.emit('chat', chat);
    }
    
}