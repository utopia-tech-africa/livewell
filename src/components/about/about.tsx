import { Heading } from "../texts/heading";

export const About = () => {
  return (
    <section className="group bg-[#232323] mb-[100px] md:mb-[110px] lg:mb-[130px] px-6 sm:px-10 py-12 sm:py-16 md:py-20 w-full rounded-br-[40px] rounded-bl-[40px]">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6 ">
        <h1 className="satoshi text-nowrap font-extrabold md:leading-[84px] text-[28px] sm:text-[42px] md:text-[50px] lg:text-[56px] text-neutral-300">
          It&apos;s more than an event!
        </h1>

        <Heading
          className=" bg-primary-500 font-bold text-[18px] sm:text-[20px] md:text-[24px] lg:text-[32px] italic font-satoshi  text-secondary-100 mb-3 z-10 -mt-7 md:-mt-10 transition-transform duration-300 ease-in-out group-hover:-translate-y-3
      "
        >
          it&apos;s a movement for better living
        </Heading>

        <p className="font-satoshi font-medium leading-[130%] text-[16px] sm:text-[18px] text-neutral-300 max-w-[70ch]">
          We bring together individuals, families, health professionals, and
          wellness brands to create a vibrant space for free health checks,
          fitness experiences, and expert-led education. <br /> From blood
          pressure tests to Zumba classes, Livewell is designed to empower every
          visitor to take charge of their health—and have fun doing it. <br />{" "}
          For health-focused companies, it’s a high-visibility platform to
          showcase products, services, and innovations to an engaged,
          health-conscious audience.
        </p>
      </div>
    </section>
  );
};
