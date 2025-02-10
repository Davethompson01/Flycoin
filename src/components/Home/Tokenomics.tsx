import bg from "../../assets/tokenomicsbg.png";
const Tokenomics = () => {
  const cards = [
    { title: "Total ", sub: "Supply", numbers: "Tba" },
    { title: "Total ", sub: "Members", numbers: "25.5k" },
    { title: "Rewards ", sub: "Pool", numbers: "nfts" },
  ];
  return (
    <div className="div-spacing py-12  bg-[#1F1F1F]  flex items-center justify-center w-full">
      <div>
        <h1 className=" text-center text-stroke w-full text-nowrap text-[#522F11] text-3xl md:text-4xl lg:text-5xl mb-6">
          FAQ
        </h1>
        {/* cards */}
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12">
          {cards.map(({ title, numbers, sub }, idx) => (
            <div
              key={idx}
              className="relative bg-[#522F11] h-40 md:h-44 lg:h-56  w-52 md:w-72 lg:w-[19rem] rounded-3xl"
              //   style={{ background: `url(${bg})` }}
            >
              {/* <div className=" absolute top-0 left-0 w-full h-full"></div> */}
              <div
                className="absolute top-0 left-0 bg-[#522F11] h-full w-full bg-cover bg-center border-[3px] border-[#FFC77E] rounded-3xl"
                style={{ backgroundImage: `url(${bg})` }}
              ></div>
              <div className=" absolute inset-0 flex flex-col items-center justify-center z-10 my-auto mx-auto text-center">
                <h1 className="text-stroke w-full text-nowrap text-[#994F00] inline md:text-4xl  ">
                  {title}
                </h1>
                <h1 className="text-stroke w-full text-nowrap text-[#994F00] text-lg md:text-4xl ">
                  {sub}:
                </h1>
                <h3 className=" text-white text-xl md:text-5xl mt-4 ">
                  {numbers}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
