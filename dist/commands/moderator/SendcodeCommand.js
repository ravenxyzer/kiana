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
exports.SendcodeCommand = void 0;
const framework_1 = require("@sapphire/framework");
const decorators_1 = require("@sapphire/decorators");
const discord_js_1 = require("discord.js");
const library_1 = require("../../library");
let SendcodeCommand = class SendcodeCommand extends framework_1.Command {
    constructor() {
        super(...arguments);
        this.Media = {
            banners: {
                hi: "https://cdn.discordapp.com/attachments/1087857946060402758/1184089066241789962/Banner_-_Honkai_Impact.png?ex=658ab3e0&is=65783ee0&hm=e146cbe64af40db585d5f8b30c01d362b1d110a83e53ba6ac909b7f4556d24df&",
                hsr: "https://cdn.discordapp.com/attachments/1087857946060402758/1184089095417384990/Banner_-_Honkai_Star_Rail.png?ex=658ab3e7&is=65783ee7&hm=d04f7d5b27e86eaac343037c6bdba4b7f3dcd68fb291369e06f320d699470bd1&",
                gi: "https://cdn.discordapp.com/attachments/1087857946060402758/1184089030032375899/Banner_-_Genshin_Impact.png?ex=658ab3d8&is=65783ed8&hm=a657519dcb88ca324cd11de98bd01d7c43eebe1fb03d6c1d6daef639f42552ae&",
            },
            colors: { hi: "#e4dbec", hsr: "#ffcedb", gi: "#55cacc" },
            games: { hi: "Honkai Impact", hsr: "Honkai: Star Rail", gi: "Genshin Impact" },
            links: { hsr: "https://hsr.hoyoverse.com/gift?code=", gi: "https://genshin.hoyoverse.com/en/gift?code=" },
            roles: { hi: "<@&1181258471023317082>", hsr: "<@&1181258362915135548>", gi: "<@&1064965101406400582>" },
        };
    }
    messageRun(message, args) {
        return __awaiter(this, void 0, void 0, function* () {
            yield message.delete();
            const game = (yield args.pick("string")).toLowerCase();
            const codes = (yield args.rest("string")).toUpperCase();
            const codesToArray = codes.split(" ");
            const { banners, colors, games, links, roles } = this.Media;
            if (["hi", "hsr", "gi"].includes(game)) {
                const embed = new library_1.EmbedBuilder()
                    .setTitle(`\`⭐\`  ${games[game]} ・ Redeemable Codes!`)
                    .setDescription("Hai <@&761577898750246942>! Jangan lewatkan kesempatan untuk mengklaim kodenya sebelum kadaluarsa ya!")
                    .setImage(banners[game])
                    .setColor(colors[game]);
                if (game === "hi") {
                    embed.addFields([{ name: "Codes", value: codesToArray.map((code) => `- \`${code}\``).join("\n") }]);
                    yield message.channel.send({ content: `${roles[game]} ada kode baru nih!`, embeds: [embed] }).then(() => __awaiter(this, void 0, void 0, function* () {
                        yield message.channel.send("## `📱`  Mobile Users\nKalian bisa salin kode-kode di bawah ini ya!");
                        for (const code of codesToArray) {
                            yield message.channel.send(`- ${code}`);
                        }
                    }));
                    return;
                }
                const linkButton = new discord_js_1.ButtonBuilder().setLabel("Open Link").setURL(links[game]).setStyle(discord_js_1.ButtonStyle.Link);
                const row = new discord_js_1.ActionRowBuilder().addComponents(linkButton);
                embed.addFields([{ name: "Codes", value: codesToArray.map((code) => `- \`${code}\` ・ [**Direct Link**](${links[game] + code})`).join("\n") }]);
                yield message.channel.send({ content: `${roles[game]} ada kode baru nih!`, embeds: [embed], components: [row] }).then(() => __awaiter(this, void 0, void 0, function* () {
                    yield message.channel.send("## `📱`  ・ Mobile Users\nUntuk pengguna mobile, kalian bisa salin kode-kode di bawah ini ya!");
                    for (const code of codesToArray) {
                        yield message.channel.send(code);
                    }
                }));
                return;
            }
            return yield message.channel.send({
                content: "Perintah Gagal! Harap masukkan kode game yang tersedia.\n- **HI** : Honkai Impact\n- **HSR** : Honkai: Star Rail\n- **GI** : Genshin Impact\nContoh : `k!sc hsr code1 code2 code3 dst`",
            });
        });
    }
};
SendcodeCommand = __decorate([
    (0, decorators_1.ApplyOptions)({
        name: "sendcode",
        aliases: ["sc"],
        description: "Send Hoyoverse's Game Redeemable Codes.",
        preconditions: ["ModeratorOnly"],
    })
], SendcodeCommand);
exports.SendcodeCommand = SendcodeCommand;
