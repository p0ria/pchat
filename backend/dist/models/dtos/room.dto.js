"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const room_entity_1 = require("../entities/room.entity");
const config_1 = require("../../config");
class RoomDto extends room_entity_1.Room {
    constructor(props) {
        super();
        for (let p in props) {
            this[p] = props[p];
        }
        this.avatarUrl = config_1.UrlConfig.BASE_ADDRESS + this.avatarUrlRelative;
    }
}
exports.RoomDto = RoomDto;
//# sourceMappingURL=room.dto.js.map