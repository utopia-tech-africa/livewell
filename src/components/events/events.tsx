import { ComponentLayout } from "../component-layout";
import { Heading } from "../texts/heading";
import { EventCards } from "./event-cards";

export const Events = () => {
  return (
    <section id="events">
      <ComponentLayout className="flex flex-col items-center gap-6">
        <Heading className="text-[18px] sm:text-[20px] md:text-[24px] italic font-satoshi font-bold rotate-0 md:-rotate-3 text-neutral-100 bg-primary-500  text-center">
          What to Expect at Livewell
        </Heading>
        <EventCards />
      </ComponentLayout>
    </section>
  );
};
