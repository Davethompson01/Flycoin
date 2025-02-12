import joinImage from "../../assets/joinImage.png";
import xIcon from "../../assets/x-Icon.svg";
import ytIcon from "../../assets/yt-Icon.svg";
import fbIcon from "../../assets/fb-Icon.svg";
import { Facebook, Twitter, Youtube } from "lucide-react";

const Join = () => {
  const buttons = [
    { name: "Twitter", icon: <Twitter /> },
    { name: "Youtube", icon: <Youtube /> },
    { name: "Facebook", icon: <Facebook /> },
  ];
  return (
    <div className=" bg-[#97EC5C] div-spacing px-6 py-24 flex flex-col items-center md:flex-row gap-8 md: justify-between  ">
      <div className=" w-[180px] mobile:w-[220px] sm:w-[300px]">
        <img src={joinImage} alt="" className=" w-full h-full" />
      </div>
      <div className=" basis-1/2 flex items-start gap-4  flex-col">
        <h1 className="text-stroke w-full text-nowrap text-[#fff] text-xl mobile:text-3xl sm:text-3xl md:text-4xl lg:text-5xl">
          What is Megarabbit?
        </h1>
        <p className=" text-white text-xs mobile:text-sm">
          MegaRabbit is the first community-driven PFP launching on
          @megaeth_labs
        </p>
        <div className=" w-full flex gap-4 items-center">
          {buttons.map(({ name, icon }, idx) => (
            <button
              key={idx}
              className=" bg-[#] flex items-center gap-1 border-2 border-[#] rounded-[10px] py-2 px-4"
            >
              {/* <img src={icon} alt="" className=" size-4" /> */}
              <div className=" text-white">{icon}</div>
              <p className=" hidden sm:block text-[10px] text-[#fff]">
                {" "}
                {name}
              </p>
            </button>
          ))}
          {/* <button className=" bg-[#E98112] text-[#522F11] text-[14px] py-2 px-7 rounded-[8px]"></button> */}

          {/* <button className=" bg-[#E98112] text-[#522F11] text-[14px] py-2 px-7 rounded-[8px]"></button> */}
          {/* <button className=" bg-[#E98112] text-[#522F11] text-[14px] py-2 px-7 rounded-[8px]"></button> */}
        </div>
      </div>
    </div>
  );
};

export default Join;
