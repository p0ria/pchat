"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../models/entities/user.entity");
const typeorm_1 = require("typeorm");
const room_entity_1 = require("../models/entities/room.entity");
const typeorm_2 = require("@nestjs/typeorm");
let MeService = class MeService {
    constructor(userRepository, roomRepository) {
        this.userRepository = userRepository;
        this.roomRepository = roomRepository;
    }
    getMe(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userRepository.findOne(userId, {
                relations: ['rooms', 'roomAdmins'],
            });
        });
    }
    joinRoom(userId, roomId) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = yield this.getUser(userId, 'rooms');
            let room = yield this.roomRepository.findOne(roomId);
            if (user.rooms.some(r => r.id == roomId))
                return user;
            user.rooms.push(room);
            return this.userRepository.save(user);
        });
    }
    leaveRoom(userId, roomId) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = yield this.getUser(userId, "rooms");
            let room = yield this.roomRepository.findOne(roomId, { relations: ["admin"] });
            let index = user.rooms.findIndex(r => r.id == roomId);
            if (index == -1)
                return user;
            if (room.admin.id == userId)
                throw new common_1.ForbiddenException("Admin can not leave room");
            user.rooms.splice(index, 1);
            return this.userRepository.save(user);
        });
    }
    findAllRooms(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = yield this.getUser(userId, 'rooms');
            return user.rooms;
        });
    }
    createRoom(userId, createRoomDto) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = yield this.getUser(userId);
            return this.roomRepository.save(Object.assign({}, createRoomDto, { admin: user, users: [user] }));
        });
    }
    getUser(userId, ...relations) {
        return this.userRepository.findOne(userId, { relations: relations });
    }
};
MeService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(user_entity_1.User)),
    __param(1, typeorm_2.InjectRepository(room_entity_1.Room)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], MeService);
exports.MeService = MeService;
//# sourceMappingURL=me.service.js.map