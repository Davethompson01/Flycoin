import curveLine from "../../assets/curve-line.png";
// import holderOne from "../../assets/holder-one.png";
const Roadmap = () => {
  return (
    <div className=" bg-[#1F1F1F] flex flex-col items-center border-primary">
      {/* Curved header section */}
      <div className="relative w-full  ">
        {/* <div className="absolute inset-x-0 h-1 bg-[#FF9B3C] top-12 transform -skew-y-"></div> */}
        {/* <h1 className="relative text-center text-4xl font-bold text-[#FF9B3C] drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
          Roadmap
        </h1> */}
        <h1 className=" relative text-center text-stroke w-full text-nowrap text-[#fff] text-3xl md:text-4xl lg:text-5xl">
          Roadmap
        </h1>
        <img src={curveLine} alt="" />
      </div>

      {/* Cards container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-2 xs:px-4 mobile:px-8 lg:px-20  w-full mt-6">
        {/* Q4 2024 Card */}

        <div className="relative pt-8">
          <div className="absolute -top-6  md:-top-14 left-1/2 -translate-x-1/2 w-px h-24 md:h-24  bg-[#FF997EC5CB3C]"></div>
          <div className="bg-[#97EC5C] py-6 pb-16 rounded-lg transform hover:-translate-y-1   h-54 transition-transform duration-300 shadow-lg flex items-center justify-center">
            <div>
              <h2 className=" text-center text-stroke w-full text-nowrap text-[#fff] font- text-2xl  mb-4">
                Q4 2024
              </h2>
              <ul className="space-y-2 list-disc list-inside text-[#fff]">
                <li>Megarabbit Launch</li>
                <li>Social media campaign</li>
                <li>Meme Competition</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Q1 2025 Card */}
        <div className="relative pt-8">
          <div className="absolute -top-8 md:-top-6 left-1/2 -translate-x-1/2 w-px h-24  bg-[#FF9B3C]"></div>
          <div className="bg-[#97EC5C] py-6 pb-16 rounded-lg transform hover:-translate-y-1 h-54 transition-transform duration-300 shadow-lg flex items-center justify-center">
            <div>
              <h2 className=" text-center text-stroke w-full text-nowrap text-[#fff] text-2xl mb-4">
                Q1 2025
              </h2>
              <ul className="space-y-2 list-disc list-inside text-[#fff] max-w-52">
                <li>Listings on popular exchanges</li>
                <li>Partnerships with meme influencers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Q2 2025 Card */}
        <div className="relative pt-8">
          <div className="absolute -top-8 md:-top-14 left-1/2 -translate-x-1/2 w-px h-24 bg-[#97EC5C]"></div>
          <div className="bg-[#97EC5C] p-6 pb-16 rounded-lg transform hover:-translate-y-1 transition-transform duration-300 shadow-lg flex items-center justify-center">
            <div>
              <h2 className=" text-center text-stroke w-full text-nowrap text-[#fff] text-2xl mb-4">
                Q1 2025
              </h2>
              <ul className="space-y-2 list-disc list-inside text-[#fff] max-w-52">
                <li>megarabbit NFT release</li>
                <li>Expansion into charity projects</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Roadmap;
