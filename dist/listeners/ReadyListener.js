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
exports.ReadyListener = void 0;
const framework_1 = require("@sapphire/framework");
const decorators_1 = require("@sapphire/decorators");
const client_1 = require("@prisma/client");
const discord_js_1 = require("discord.js");
let ReadyListener = class ReadyListener extends framework_1.Listener {
    constructor() {
        super(...arguments);
        this.prisma = new client_1.PrismaClient();
    }
    run() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            void ((_a = this.container.client.user) === null || _a === void 0 ? void 0 : _a.setPresence({
                status: "online",
                activities: [{ name: "You and me together!", type: discord_js_1.ActivityType.Watching }],
            }));
            try {
                yield this.prisma.$connect();
                void this.container.logger.info("Connected to MongoDB");
            }
            catch (error) {
                void this.container.logger.error("Error connecting to MongoDB:", error);
            }
            void this.container.logger.info("Client is online!");
        });
    }
};
ReadyListener = __decorate([
    (0, decorators_1.ApplyOptions)({
        name: "ready",
        event: framework_1.Events.ClientReady,
        once: true,
    })
], ReadyListener);
exports.ReadyListener = ReadyListener;
