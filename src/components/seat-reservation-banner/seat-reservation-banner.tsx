import Image from "next/image";
import { Button } from "../ui/button";
import { ComponentLayout } from "../component-layout";
import { BluePatternLeft, BluePatternRight } from "@/assets/img";
import Link from "next/link";

export const SeatReservationBanner = () => {
  return (
    <ComponentLayout>
      <div className="relative flex flex-col items-center justify-center rounded-[12px] bg-primary-600 overflow-hidden px-6 py-20 my-[90px] md:my-[100px] lg:my-[120px] text-center text-white">
        <Image
          src={BluePatternLeft}
          alt="background pattern left"
          className="absolute left-0 bottom-0 h-[150px] w-[120px] md:h-[150px] md:w-[180px] lg:h-[209.96px] lg:w-[200px] object-cover opacity-90"
        />
        <Image
          src={BluePatternRight}
          alt="background pattern right"
          className="absolute right-0 top-0 h-[150px] w-[120px] sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[280px] lg:h-[309.96px] lg:w-[350px] object-cover opacity-90"
        />

        <div className="relative z-10 max-w-3xl flex flex-col items-center gap-6">
          <h2 className="text-[22px] md:text-[32px] italic font-satoshi font-extrabold leading-snug text-neutral-100">
            Get Your Seat for the Fitness & Health <br /> Festival of the Year
          </h2>

          <p className="text-neutral-100 text-sm md:text-lg max-w-2xl">
            As health enthusiasts, we created this festival. No sterile clinics,
            just a vibrant community learning, moving, and celebrating healthy
            living.
          </p>
          <Link href="/reserve-seat">
            <Button className="bg-neutral-100 text-primary-600 font-extrabold w-[180px] md:w-[262px] text-sm md:text-lg">
              Reserve your spot
            </Button>
          </Link>
        </div>
      </div>
    </ComponentLayout>
  );
};
