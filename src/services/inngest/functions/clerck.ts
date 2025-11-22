import { env } from "@/data/env/server";
import { inngest } from "../client";
import { Webhook } from "svix";
import { NonRetriableError } from "inngest";
import { insertUser } from "@/app/features/users/db/users";
import { insertUserNotificationSettings } from "@/app/features/users/db/userNotificationSettings";

function verifyWebhook({ raw, headers }: {
    raw: string;
    headers: Record<string, string>
}) {
    return new Webhook(env.CLERK_WEBHOOK_SECRET)
}

export const clerCreateUser = inngest.createFunction(
    {
        id: 'clerk/create-db-user',
        name: "Clerk - Create DB User"
    }, {
        event: "clerk/user.created"
    },
    async ({ event, step }) => {
        await step.run("Verify Webhook", async () => {
            try {
                verifyWebhook(event.data)
            } catch {
                throw new NonRetriableError("Invalid webhook signature");
            }
        });

        const userId = await step.run("create-user", async () => {
            const userData = event.data.data
            const email = userData.email_addresses?.find(e => e.id === userData.primary_email_address_id)?.email_address || null;
            if (!email) {
                throw new NonRetriableError("No primary email address found");
            }

            await insertUser({
                id: userData.id,
                name: `${userData.first_name} ${userData.last_name}`,
                imageUrl: userData.image_url,
                email: email,
                createdAt: new Date(userData.created_at),
                updatedAt: new Date(userData.updated_at)
            })

            return userData.id;
        })
 
        await step.run("create-user-notification-settings", async () => {
            await insertUserNotificationSettings({userId});
        });
});