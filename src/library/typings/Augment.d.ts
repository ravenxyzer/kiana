import * as Preconditions from "../../preconditions";

declare module "@sapphire/framework" {
    interface Preconditions {
        ModeratorOnly: never;
    }

    const enum Identifiers {
        PreconditionOwnerOnly = "preconditionOwnerOnly",
        PreconditionAdminOnly = "preconditionAdminOnly",
        PreconditionModeratorOnly = "preconditionModeratorOnly",
        PreconditionIsRegistered = "preconditionIsRegistered",
    }
}
