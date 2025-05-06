import Image from "next/image";
import { FC } from "react";

type LocationFeatureProps = {
  icon: string;
  text: string;
};

const LocationFeature: FC<LocationFeatureProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center mb-8">
      <div className="bg-[#FAEBCF] rounded-full font-montserrat p-4 w-16 h-16 flex items-center justify-center">
        <Image src={icon} alt="Location feature" width={30} height={30} />
      </div>
      <div className="ml-4">
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
};

const LocationSection = () => {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-xs uppercase tracking-widest mb-2 text-gray-400 font-montserrat">
              LOCATION
            </h2>
            <h1 className="text-5xl lg:text-6xl font-abt-bold mb-4 pl-20 text-gray-500">
              The Golden
            </h1>
            <h1 className="text-5xl lg:text-6xl font-abt-bold mb-16  pl-20 text-black">
              Location
            </h1>

            <div className="flex">
              <div className="w-20 h-0.5 bg-[#ABBBC5] mt-3 mr-8 flex-shrink-0"></div>

              <div>
                <p className="text-gray-500 leading-8 font-montserrat mb-8 pr-18">
                  Swarnim&apos;s position in{" "}
                  <span className="font-medium">Sector 5, Gurgaon</span>, one of
                  the city&apos;s most promising sub-cities, makes it an irresistible
                  choice for those looking to invest in{" "}
                  <span className="font-medium">
                    commercial retail space in Gurgaon
                  </span>
                  .
                </p>

                <LocationFeature
                  icon="/images/Located-in.svg"
                  text="Located in a bustling community of 25,000 families"
                />

                <LocationFeature
                  icon="/images/proximity-and.svg"
                  text="Proximity and easy access to Gurugram's city center and Delhi"
                />

                <LocationFeature
                  icon="/images/well-connected.svg"
                  text="Well-connected to all major roads"
                />
              </div>
            </div>
            <p className="text-gray-400 mb-4 mt-10 pl-10 font-montserrat">
              Swarnim is a dream come true for investors looking for{" "}
              <span className="font-medium">retail space in Gurgaon</span>{" "}
              because here every opportunity is golden. Swarnim offers
              thoughtfully designed shops that promise high growth potential.
            </p>

            <p className="text-gray-400 pl-10 font-montserrat">
              Welcome to a space where golden opportunities await.
            </p>
          </div>

          <div className="overflow-hidden relative group w-[600px] h-[650px] pl-20">
            <Image
              src="/images/location-Map.webp"
              alt="Swarnim Location Map"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110 rounded-sm"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
