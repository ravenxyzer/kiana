"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gallery = exports.Presences = exports.Emojis = exports.Colors = exports.AdminIds = void 0;
const discord_js_1 = require("discord.js");
/**
 * @description Administrator Discord UserId's
 */
exports.AdminIds = ["387886389800337409"];
/**
 * @description Colors
 */
exports.Colors = {
    primary: "#f69f65",
    secondary: "#d8d8d8",
    success: "#04c03f",
    error: "#ee0002",
};
/**
 * @description Custom Emojis
 */
exports.Emojis = {
    checkmark: "<:checkmark:1080037252765335572>",
    redcross: "<:red_cross:1083636400689262624>",
    loading: "<a:cooldown:1120595301883969578>",
    pin: "<:pin:1107636440998879293>",
};
/**
 * @description Client Presences
 */
exports.Presences = [
    { name: "Butterfly", type: discord_js_1.ActivityType.Watching },
    { name: "The Art of Khemia", type: discord_js_1.ActivityType.Watching },
    { name: "Paimon", type: discord_js_1.ActivityType.Playing },
];
/**
 * @description Icon gallery
 */
exports.Gallery = {
    spiral: "https://cdn.discordapp.com/attachments/1159695498085662821/1159695538002866196/spiral_abyss_icon.png?ex=6531f5a2&is=651f80a2&hm=fda5e038e2b34a269251a1609ebad8db0c0063901aa95c16f6658d13e4ae9ec1&",
};
