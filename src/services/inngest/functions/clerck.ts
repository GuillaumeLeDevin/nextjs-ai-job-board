import { env } from "@/data/env/server";
import { inngest } from "../client";
import { Webhook } from "svix";
import { NonRetriableError } from "inngest";

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
            } catch (error) {
                throw new NonRetriableError("Invalid webhook signature");
            }
        });

        const userId = await step.run("create-user", async () => {
            const userData = event.data.data
            const email = userData.email_addresses?.find(e => e.id === userData.primary_email_address_id)?.email_address || null;
            if (!email) {
                throw new NonRetriableError("No primary email found for user");
            }

            await insertUser({

            })

            return userData.id;
        })
    
});