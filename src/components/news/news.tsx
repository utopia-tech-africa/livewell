import { ComponentLayout } from "../component-layout";
import { Heading } from "../texts/heading";
import { NewsCards } from "./news-cards";

export const News = () => {
  return (
    <section
      id="blog"
      className="mt-[90px] relative min-h-fit md:mt-[100px] pt-4 lg:mt-[120px] mb-[60px]"
    >
      <Heading className="absolute font-satoshi left-1/2 -translate-x-1/2  -top-6 bg-secondary-500 text-neutral-100  z-10 text-[20px] sm:text-[28px] font-bold">
        News Articles
      </Heading>
      <ComponentLayout>
        <NewsCards />
      </ComponentLayout>
    </section>
  );
};
