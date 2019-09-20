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
const passport_1 = require("@nestjs/passport");
const me_service_1 = require("./me.service");
const room_dto_1 = require("../models/dtos/room.dto");
const create_room_dto_1 = require("../models/dtos/create-room.dto");
let MeController = class MeController {
    constructor(meService) {
        this.meService = meService;
    }
    getProfile(req) {
        return this.meService.getMe(req.user.id);
    }
    joinRoom(req, roomId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.meService.joinRoom(req.user.id, +roomId);
            return Object.assign({}, result, { rooms: result.rooms.map(r => new room_dto_1.RoomDto(r)) });
        });
    }
    leaveRoom(req, roomId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.meService.leaveRoom(req.user.id, +roomId);
            return Object.assign({}, result, { rooms: result.rooms.map(r => new room_dto_1.RoomDto(r)) });
        });
    }
    allRooms(req) {
        return this.meService.findAllRooms(req.user.id)
            .then(rooms => {
            return rooms.map(r => new room_dto_1.RoomDto(r));
        });
    }
    createRoom(req, createRoomDto) {
        return this.meService.createRoom(req.user.id, createRoomDto)
            .then(r => new room_dto_1.RoomDto(r));
    }
};
__decorate([
    common_1.Get(),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MeController.prototype, "getProfile", null);
__decorate([
    common_1.Put('rooms/:id/join'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __param(0, common_1.Request()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MeController.prototype, "joinRoom", null);
__decorate([
    common_1.Put('rooms/:id/leave'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __param(0, common_1.Request()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MeController.prototype, "leaveRoom", null);
__decorate([
    common_1.Get('rooms'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MeController.prototype, "allRooms", null);
__decorate([
    common_1.Post('rooms'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __param(0, common_1.Request()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_room_dto_1.CreateRoomDto]),
    __metadata("design:returntype", Promise)
], MeController.prototype, "createRoom", null);
MeController = __decorate([
    common_1.Controller('api/me'),
    __metadata("design:paramtypes", [me_service_1.MeService])
], MeController);
exports.MeController = MeController;
//# sourceMappingURL=me.controller.js.map