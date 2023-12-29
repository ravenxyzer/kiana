import "dotenv/config";
import { SapphireClient, LogLevel } from "@sapphire/framework";
import { Time } from "@sapphire/time-utilities";
import { Partials } from "discord.js";

const client = new SapphireClient({
    allowedMentions: {
        parse: ["roles", "users"],
        repliedUser: true,
    },
    caseInsensitiveCommands: true,
    caseInsensitivePrefixes: true,
    defaultPrefix: "k!",
    defaultCooldown: {
        delay: Time.Second * 3,
    },
    enableLoaderTraceLoggings: false,
    intents: [
        "AutoModerationConfiguration",
        "AutoModerationExecution",
        "DirectMessageReactions",
        "DirectMessageTyping",
        "DirectMessages",
        "GuildBans",
        "GuildEmojisAndStickers",
        "GuildIntegrations",
        "GuildInvites",
        "GuildMembers",
        "GuildMessageReactions",
        "GuildMessageTyping",
        "GuildMessages",
        "GuildPresences",
        "GuildScheduledEvents",
        "GuildVoiceStates",
        "GuildWebhooks",
        "Guilds",
        "MessageContent",
    ],
    loadDefaultErrorListeners: false,
    loadMessageCommandListeners: true,
    logger: {
        level: LogLevel.Debug,
    },
    partials: [Partials.Channel, Partials.GuildMember, Partials.Message, Partials.Reaction],
    typing: false,
});

void client.login(process.env.TOKEN);
