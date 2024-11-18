import { useEffect, useState } from "react";
import { fetchFutureEvents } from "~/lib/queries.ts";
import type { Event } from "~/types.ts";
import FutureEventCard from "./FutureEventCard.tsx";

export const prerender = false;

function FutureEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  useEffect(() => {
    const now = new Date();
    fetchFutureEvents(now.toISOString()).then((events) => {
      console.log("Eventos: ", events);
      setEvents(events.eventCollection.items);
    });
  }, []);

  if (events.length < 1) {
    return <p>Proximamente...</p>;
  }
  return (
    <div className="flex w-full flex-col justify-between overflow-x-hidden">
      <div>
        <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-stretch gap-6 p-4">
            {events.map((event: Event) => (
              <FutureEventCard key={event.sys.id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FutureEvents;
