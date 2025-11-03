import { fetchEvents } from "@/lib/queries/event-queries";
import { EVENTS_QUERYResult } from "../../../sanity.types";
import { ErrorText } from "../texts/error-text";
import { EventCard } from "./event-card";

type EventItem = EVENTS_QUERYResult[number];

export const EventCards = async () => {
  const eventCards: EVENTS_QUERYResult | string = await fetchEvents();

  if (typeof eventCards === "string")
    return <ErrorText>Network Error!</ErrorText>;

  return (
    <div className="grid grid-cols-4 gap-6">
      {eventCards.map((event: EventItem) => (
        <EventCard key={event._id} {...event} />
      ))}
    </div>
  );
};
