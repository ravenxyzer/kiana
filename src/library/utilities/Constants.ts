import { ColorResolvable, PresenceData, ActivitiesOptions, ActivityType } from "discord.js";

/**
 * @description Administrator Discord UserId's
 */
export const AdminIds: string[] = ["387886389800337409"];

/**
 * @description Colors
 */
export const Colors = {
    primary: "#f69f65" as ColorResolvable,
    secondary: "#d8d8d8" as ColorResolvable,
    success: "#04c03f" as ColorResolvable,
    error: "#ee0002" as ColorResolvable,
};

/**
 * @description Custom Emojis
 */
export const Emojis = {
    checkmark: "<:checkmark:1080037252765335572>",
    redcross: "<:red_cross:1083636400689262624>",
    loading: "<a:cooldown:1120595301883969578>",
    pin: "<:pin:1107636440998879293>",
};

/**
 * @description Client Presences
 */
export const Presences: ActivitiesOptions[] = [
    { name: "Butterfly", type: ActivityType.Watching },
    { name: "The Art of Khemia", type: ActivityType.Watching },
    { name: "Paimon", type: ActivityType.Playing },
];

/**
 * @description Icon gallery
 */
export const Gallery = {
    spiral: "https://cdn.discordapp.com/attachments/1159695498085662821/1159695538002866196/spiral_abyss_icon.png?ex=6531f5a2&is=651f80a2&hm=fda5e038e2b34a269251a1609ebad8db0c0063901aa95c16f6658d13e4ae9ec1&",
};
