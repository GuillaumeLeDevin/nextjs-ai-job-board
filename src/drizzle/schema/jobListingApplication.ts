import { index, pgTable, primaryKey, uuid, varchar, integer, text, pgEnum } from "drizzle-orm/pg-core";
import { createdAt, updatedAt } from "../schemaHelpers";
import { JobListingTable } from "./jobListing";
import { UserTable } from "./user";

export const applicationStages = [
    "denied",
    "applied",
    "interested",
    "interviewed",
    "hired"
] as const;
export type ApplicationStage = (typeof applicationStages)[number];
export const applicationStagesEnum = pgEnum(
    "job_listing_applications_stage",
    applicationStages
);

export const JobListingApplicationTable = pgTable(
    "job_listing_applications",
    {
        jobListingId: uuid()
            .references(() => JobListingTable.id, { onDelete: "cascade" })
            .notNull(),
        userId: varchar()
            .references(() => UserTable.id, { onDelete: "cascade" })
            .notNull(),
        coverLetter: text(),
        rating: integer(),
        stage: applicationStagesEnum().notNull().default("applied"),
        createdAt,
        updatedAt,
    },
    (table) => [primaryKey({columns: [table.jobListingId, table.userId] })]
)