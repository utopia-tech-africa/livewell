import { ComponentLayout } from "../component-layout";
import { Heading } from "../texts/heading";
import { EventCards } from "./event-cards";

export const Events = () => {
  return (
    <ComponentLayout>
      <div className="relative flex flex-col gap-6">
        <Heading className=" absolute bg-primary-500 text-neutral-100 text-[32px] font-satoshi">
          What to Expect at Livewell
        </Heading>
        <EventCards />
      </div>
    </ComponentLayout>
  );
};
