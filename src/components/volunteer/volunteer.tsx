import Image from "next/image";
import { VolunteerFormImg } from "@/assets/img";
import { VolunteerForm } from "./volunteer-form";
import { ComponentLayout } from "../component-layout";

export const Volunteer = () => {
  return (
    <div id="volunteer">
      <ComponentLayout className="w-full mt-[90px] md:mt-[100px] lg:mt-[120px] rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-11 items-stretch">
          <div className="relative h-[280px] md:h-auto min-h-90">
            <Image
              src={VolunteerFormImg}
              alt="Volunteers"
              fill
              className="object-cover w-full h-full rounded-[12px]"
              priority
            />
          </div>

          <div className="flex flex-col justify-center">
            <VolunteerForm />
          </div>
        </div>
      </ComponentLayout>
    </div>
  );
};
