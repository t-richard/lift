import { Storage, STORAGE_DEFINITION } from "./Storage";
import { Queue, QUEUE_DEFINITION } from "./Queue";
import { STATIC_WEBSITE_DEFINITION, StaticWebsite } from "./StaticWebsite";
import { Webhook, WEBHOOK_DEFINITION } from "./Webhook";
import { SERVER_SIDE_WEBSITE_DEFINITION, ServerSideWebsite } from "./ServerSideWebsite";

export const constructs = {
    storage: {
        class: Storage,
        schema: STORAGE_DEFINITION,
    },
    queue: {
        class: Queue,
        schema: QUEUE_DEFINITION,
    },
    "static-website": {
        class: StaticWebsite,
        schema: STATIC_WEBSITE_DEFINITION,
    },
    webhook: {
        class: Webhook,
        schema: WEBHOOK_DEFINITION,
    },
    "server-side-website": {
        class: ServerSideWebsite,
        schema: SERVER_SIDE_WEBSITE_DEFINITION,
    },
};
