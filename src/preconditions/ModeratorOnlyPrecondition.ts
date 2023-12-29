import { PreconditionOptions, AllFlowsPrecondition, Command } from "@sapphire/framework";
import { ApplyOptions } from "@sapphire/decorators";
import type { Guild, GuildMember, Message } from "discord.js";

@ApplyOptions<PreconditionOptions>({
    name: "ModeratorOnly",
})
export class AdminOnlyPrecondition extends AllFlowsPrecondition {
    public override async messageRun(message: Message) {
        const guild: Guild = await this.getGuild();

        if (message.guild.id !== guild.id) return this.error();

        const member: GuildMember = await guild.members.fetch(message.author.id);

        return member.roles.cache.has("959293630022053928") ? this.ok() : this.error({ identifier: "preconditionModeratorOnly" });
    }

    public override async chatInputRun(interaction: Command.ChatInputCommandInteraction) {
        const guild: Guild = await this.getGuild();

        if (interaction.guild.id !== guild.id) return this.error();

        const member: GuildMember = await guild.members.fetch(interaction.user.id);

        return member.roles.cache.has("959293630022053928") ? this.ok() : this.error({ identifier: "preconditionModeratorOnly" });
    }

    public override async contextMenuRun(interaction: Command.ContextMenuCommandInteraction) {
        const guild: Guild = await this.getGuild();

        if (interaction.guild.id !== guild.id) return this.error();

        const member: GuildMember = await guild.members.fetch(interaction.user.id);

        return member.roles.cache.has("959293630022053928") ? this.ok() : this.error({ identifier: "preconditionModeratorOnly" });
    }

    private async getGuild() {
        return await this.container.client.guilds.fetch("761550024131215430");
    }
}
