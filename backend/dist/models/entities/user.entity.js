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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const room_entity_1 = require("./room.entity");
const room_chat_entity_1 = require("./room.chat.entity");
const user_credential_entity_1 = require("./user.credential.entity");
let User = class User {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "avatarUrl", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    typeorm_1.OneToOne(type => user_credential_entity_1.UserCredential, uc => uc.user),
    __metadata("design:type", user_credential_entity_1.UserCredential)
], User.prototype, "credential", void 0);
__decorate([
    typeorm_1.ManyToMany(type => room_entity_1.Room, room => room.users),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], User.prototype, "rooms", void 0);
__decorate([
    typeorm_1.OneToMany(type => room_chat_entity_1.RoomChat, roomChats => roomChats.user),
    __metadata("design:type", Array)
], User.prototype, "roomChats", void 0);
__decorate([
    typeorm_1.OneToMany(type => room_entity_1.Room, room => room.admin),
    __metadata("design:type", Array)
], User.prototype, "roomAdmins", void 0);
User = __decorate([
    typeorm_1.Entity()
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map