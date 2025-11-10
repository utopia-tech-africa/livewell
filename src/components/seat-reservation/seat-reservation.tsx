import Image from "next/image";
import { Button } from "../ui/button";
import { ComponentLayout } from "../component-layout";
import { BluePattern } from "@/assets/img";

export const SeatReservation = () => {
  return (
    <ComponentLayout>
      <div className="relative flex flex-col items-center justify-center rounded-[12px] bg-[#006A7B] overflow-hidden px-6 py-20 my-[90px] md:my-[100px] lg:my-[120px] text-center text-white">
        {/* <Image
          src={BluePattern}
          alt="background pattern left"
          className="absolute left-0 top-0 h-full w-auto object-cover opacity-90"
        />
        <Image
          src={BluePattern}
          alt="background pattern right"
          className="absolute right-0 top-0 h-full w-auto object-cover opacity-90 rotate-180"
        /> */}

        <div className="relative z-10 max-w-3xl flex flex-col items-center gap-6">
          <h2 className="text-[22px] md:text-[32px] italic font-satoshi font-extrabold leading-snug text-neutral-100">
            Get Your Seat for the Fitness & Health <br />
            Festival of the Year
          </h2>

          <p className="text-neutral-100 text-sm md:text-lg max-w-2xl">
            As health enthusiasts, we created this festival. No sterile clinics,
            just a vibrant community learning, moving, and celebrating healthy
            living.
          </p>

          <Button className="bg-neutral-100 text-primary-600 font-extrabold text-lg">
            Reserve your spot
          </Button>
        </div>
      </div>
    </ComponentLayout>
  );
};
