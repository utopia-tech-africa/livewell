import Image from "next/image";
import { SeatReservationImg } from "@/assets/img";
import { ComponentLayout } from "@/components";
import { SeatReservationForm } from "./seat-reservation-form";

export const ReserveSeat = () => {
  return (
    <ComponentLayout className="w-full mt-[90px] md:mt-[100px] lg:mt-[120px] rounded-2xl overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        <div className="relative h-[280px] md:h-auto min-h-90">
          <Image
            src={SeatReservationImg}
            alt="Seat reservation image"
            fill
            className="object-cover w-full h-full rounded-[12px]"
            priority
          />
        </div>

        <div className="flex flex-col justify-center">
          <SeatReservationForm />
        </div>
      </div>
    </ComponentLayout>
  );
};
