import { fetchFutureEvents } from "~/lib/queries.ts";
import type { EventsData } from "~/types.ts";

export async function GET(): Promise<Response> {
  const now = new Date().toISOString();
  const futureEvents: EventsData = await fetchFutureEvents(now);
  return new Response(JSON.stringify(futureEvents), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
