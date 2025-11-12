import { pgTable, varchar } from "drizzle-orm/pg-core";
import { createdAt, updatedAt } from "../schemaHelpers";
import { relations } from "drizzle-orm/relations";
import { OrganisationUserSettingsTable, userNotificationSettingsTable, userResumeTable } from "../schema";

export const UserTable = pgTable("users", {
    id: varchar().primaryKey(),
    name: varchar().notNull(),
    imageUrl: varchar().notNull(),
    email: varchar().notNull().unique(),
    createdAt,
    updatedAt
});

export const userRelations = relations(
    UserTable, ({ one, many }) => ({
        userNotificationSettings: one(userNotificationSettingsTable),
        userResume: one(userResumeTable),
        organisationUserSettings: many(OrganisationUserSettingsTable),
    })
)