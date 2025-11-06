import { ComponentLayout } from "../component-layout";
import { Heading } from "../texts/heading";
import { EventCards } from "./event-cards";

export const Events = () => {
  return (
    <section id="events">
      <ComponentLayout className="flex flex-col items-center gap-10">
        <Heading className="text-3xl md:text-4xl font-bold text-neutral-100 bg-primary-500 font-satoshi text-center px-3 md:px-6 py-1 md:py-3 rounded-lg">
          What to Expect at Livewell
        </Heading>
        <EventCards />
      </ComponentLayout>
    </section>
  );
};
