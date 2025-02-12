import bg from "../../assets/aboutBg.png";
const About = () => {
  return (
    <div className=" bg-[#97EC5C] pt-12 flex flex-col sm:flex-row items-center justify-between w-full gap-12 px-4 mobile:px-8 md:px-24">
      <div className=" basis-1/2 flex items-start gap-4  flex-col">
        <h1 className="text-stroke w-full text-nowrap text-[#fff] text-xl mobile:text-3xl sm:text-3xl md:text-4xl lg:text-5xl">
          What is Megarabbit?
        </h1>
        <p className=" text-[#fff] text-xs mobile:text-sm">
          Megarabbit is a community-driven megaeth_labs chain. Whether you're a crypto enthusiast or a casual
          trader, Megarabbit offers fun and rewards while keeping things
          lighthearted in the discord community.
        </p>
        <button className=" bg-[#13532B] text-[#fff] text-[14px] py-2 px-7 rounded-[8px]">
          Get Megapass
        </button>
      </div>
      {/* image */}
      <div className=" ba12 w-[180px] mobile:w-[220px] sm:w-[300px]">
        <img src={bg} alt="" className=" w-full " />
      </div>
    </div>
  );
};

export default About;
