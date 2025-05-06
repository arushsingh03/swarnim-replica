import Image from "next/image";

const OverviewSection = () => {
  return (
    <section className="w-full bg-[#413F4D] text-white py-24">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-xs uppercase tracking-widest mb-2 text-gray-400 font-montserrat">
              OVERVIEW
            </h2>
            <h1 className="text-5xl lg:text-6xl font-abt-bold mb-16 pl-20">
              The Golden
              <br />
              Life
            </h1>

            <div className="flex">
              <div className="w-16 h-0.5 bg-[#576272] mt-3 mr-8 flex-shrink-0"></div>

              <p className="text-gray-300 leading-8 font-montserrat pr-18">
                You promise yourself and your loved ones brighter opportunities,
                a prospering tomorrow, and a purer life.<br></br> Our promise is
                delivering spaces that help you fulfill <br></br>yours. A
                high-street retail project in the heart of an <br></br>
                auspicious region, Swarnim is a landmark. And, a worthy{" "}
                <br></br>investment for the far-sighted. When you own your part{" "}
                <br></br>of Swarnim, you own more than just affordable <br></br>
                commercial shops in Gurgaon; you own a pure asset, a <br></br>{" "}
                bright opportunity. It is your step toward the golden life.
              </p>
            </div>
          </div>

          <div className="overflow-hidden relative group w-[600px] h-[650px] pl-20">
            <Image
              src="/images/about-golden.webp"
              alt="Swarnim Building Exterior"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
