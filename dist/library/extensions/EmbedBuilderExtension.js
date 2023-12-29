"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbedBuilder = void 0;
const discord_js_1 = require("discord.js");
const __1 = require("..");
class EmbedBuilder extends discord_js_1.EmbedBuilder {
    constructor() {
        super();
        this.setColor(__1.Colors.primary);
    }
    isErrorEmbed() {
        this.setColor(__1.Colors.error);
        return this;
    }
    isSuccessEmbed() {
        this.setColor(__1.Colors.success);
        return this;
    }
}
exports.EmbedBuilder = EmbedBuilder;
