import { FC } from "react";

type ProximityPointProps = {
  name: string;
  time: string;
};

const ProximityPoint: FC<ProximityPointProps> = ({ name, time }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="h-6 w-6 rounded-full bg-white border-1 border-[#CDA353] relative z-10"></div>
      <div className="mt-4">
        <h4 className="font-montserrat text-xs font-bold">{name}</h4>
        <p className="text-xs font-montserrat mt-2 font-bold">{time}</p>
      </div>
    </div>
  );
};

const ProximityTimeline = () => {
  return (
    <section className="py-12">
      <div className="w-[1400px] mx-auto container px-10">
        <div className="relative">
          <div className="absolute top-3 left-0 right-0 h-[0.5px] bg-[#CDA353]"></div>
          <div className="grid grid-cols-7 gap-4">
            <ProximityPoint
              name="Delhi-Mumbai "
              time="Industrial Corridor 5 minutes"
            />
            <ProximityPoint name="IGI Airport" time="30 minutes" />
            <ProximityPoint name="G.D. Goenka School" time="5 minutes" />
            <ProximityPoint name="K.R. Mangalam University" time="5 minutes" />
            <ProximityPoint name="Medanta - The Medicity" time="15 minutes" />
            <ProximityPoint name="Proposed Metro" time="10 minutes" />
            <ProximityPoint name="Gurugram Railway Station" time="20 minutes" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProximityTimeline;
