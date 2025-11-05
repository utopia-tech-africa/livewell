import { fetchEvents } from "@/lib/queries/event-queries";
import { EVENTS_QUERYResult } from "../../../sanity.types";
import { ErrorText } from "../texts/error-text";
import { EventCard } from "./event-card";

type EventItem = EVENTS_QUERYResult[number];

export const EventCards = async () => {
  const eventCards: EVENTS_QUERYResult | string = await fetchEvents();

  if (typeof eventCards === "string") {
    return <ErrorText>Network Error!</ErrorText>;
  }

  if (!eventCards || eventCards.length === 0)
    return (
      <ErrorText className="text-center">No Event Details Found</ErrorText>
    );

  return (
    <div className="flex gap-6 overflow-x-auto">
      {eventCards.map((event: EventItem) => (
        <EventCard key={event._id} {...event} />
      ))}
    </div>
  );
};
