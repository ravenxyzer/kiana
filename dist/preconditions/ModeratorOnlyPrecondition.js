"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminOnlyPrecondition = void 0;
const framework_1 = require("@sapphire/framework");
const decorators_1 = require("@sapphire/decorators");
let AdminOnlyPrecondition = class AdminOnlyPrecondition extends framework_1.AllFlowsPrecondition {
    messageRun(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const guild = yield this.getGuild();
            if (message.guild.id !== guild.id)
                return this.error();
            const member = yield guild.members.fetch(message.author.id);
            return member.roles.cache.has("959293630022053928") ? this.ok() : this.error({ identifier: "preconditionModeratorOnly" });
        });
    }
    chatInputRun(interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const guild = yield this.getGuild();
            if (interaction.guild.id !== guild.id)
                return this.error();
            const member = yield guild.members.fetch(interaction.user.id);
            return member.roles.cache.has("959293630022053928") ? this.ok() : this.error({ identifier: "preconditionModeratorOnly" });
        });
    }
    contextMenuRun(interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const guild = yield this.getGuild();
            if (interaction.guild.id !== guild.id)
                return this.error();
            const member = yield guild.members.fetch(interaction.user.id);
            return member.roles.cache.has("959293630022053928") ? this.ok() : this.error({ identifier: "preconditionModeratorOnly" });
        });
    }
    getGuild() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.container.client.guilds.fetch("761550024131215430");
        });
    }
};
AdminOnlyPrecondition = __decorate([
    (0, decorators_1.ApplyOptions)({
        name: "ModeratorOnly",
    })
], AdminOnlyPrecondition);
exports.AdminOnlyPrecondition = AdminOnlyPrecondition;
