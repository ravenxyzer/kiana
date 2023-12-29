import { Args, Command } from "@sapphire/framework";
import { ApplyOptions } from "@sapphire/decorators";
import { ActionRowBuilder, ButtonBuilder, ButtonStyle, ColorResolvable, Embed, Message } from "discord.js";

import { EmbedBuilder } from "../../library";

@ApplyOptions<Command.Options>({
    name: "sendcode",
    aliases: ["sc"],
    description: "Send Hoyoverse's Game Redeemable Codes.",
    preconditions: ["ModeratorOnly"],
})
export class SendcodeCommand extends Command {
    public override async messageRun(message: Message, args: Args): Promise<Message> {
        await message.delete();
        const game: string = (await args.pick("string")).toLowerCase();
        const codes: string = (await args.rest("string")).toUpperCase();
        const codesToArray = codes.split(" ");

        const { banners, colors, games, links, roles } = this.Media;

        if (["hi", "hsr", "gi"].includes(game)) {
            const embed: EmbedBuilder = new EmbedBuilder()
                .setTitle(`\`⭐\`  ${games[game]} ・ Redeemable Codes!`)
                .setDescription("Hai <@&761577898750246942>! Jangan lewatkan kesempatan untuk mengklaim kodenya sebelum kadaluarsa ya!")
                .setImage(banners[game])
                .setColor(colors[game] as ColorResolvable);

            if (game === "hi") {
                embed.addFields([{ name: "Codes", value: codesToArray.map((code) => `- \`${code}\``).join("\n") }]);
                await message.channel.send({ content: `${roles[game]} ada kode baru nih!`, embeds: [embed] }).then(async () => {
                    await message.channel.send("## `📱`  Mobile Users\nKalian bisa salin kode-kode di bawah ini ya!");

                    for (const code of codesToArray) {
                        await message.channel.send(`- ${code}`);
                    }
                });

                return;
            }

            const linkButton = new ButtonBuilder().setLabel("Open Link").setURL(links[game]).setStyle(ButtonStyle.Link);
            const row = new ActionRowBuilder<ButtonBuilder>().addComponents(linkButton);

            embed.addFields([{ name: "Codes", value: codesToArray.map((code) => `- \`${code}\` ・ [**Direct Link**](${links[game] + code})`).join("\n") }]);
            await message.channel.send({ content: `${roles[game]} ada kode baru nih!`, embeds: [embed], components: [row] }).then(async () => {
                await message.channel.send("## `📱`  ・ Mobile Users\nUntuk pengguna mobile, kalian bisa salin kode-kode di bawah ini ya!");

                for (const code of codesToArray) {
                    await message.channel.send(code);
                }
            });

            return;
        }

        return await message.channel.send({
            content:
                "Perintah gagal! Harap masukkan kode game yang tersedia.\n- **HI** : Honkai Impact\n- **HSR** : Honkai: Star Rail\n- **GI** : Genshin Impact\nContoh : `k!sc hsr code1 code2 code3 dst`",
        });
    }

    private Media = {
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
