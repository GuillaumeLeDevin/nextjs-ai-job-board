import { boolean, integer, pgTable, primaryKey, varchar } from "drizzle-orm/pg-core";
import { createdAt, updatedAt } from "../schemaHelpers";
import { UserTable } from "./user";
import { OrganisationTable } from "./organisation";

export const OrganisationUserSettingsTable = pgTable(
    'organisation_user_settings',
    {
        userId: varchar()
            .notNull()
            .references(() => UserTable.id),
        organisationId: varchar()
            .notNull()
            .references(() => OrganisationTable.id),
        newApplicationEmailNotifications: boolean().notNull().default(false),
        minimumRating: integer(),
        createdAt,
        updatedAt,
    },
    table => [primaryKey({ columns: [table.userId, table.organisationId] })]
); 
