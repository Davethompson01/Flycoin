import logo from "../../assets/rabbit.png";
import x from "../../assets/x-Icon.svg";
import yt from "../../assets/yt-Icon.svg";
import fb from "../../assets/fb-Icon.svg";
const Footer = () => {
  const icons = [x, yt, fb];
  return (
    <footer className=" bg-[#1F1F1F] div-spacing py-12 flex flex-col md:flex-row gap-8 items-center justify-between w-full">
      {/* logo */}
      <div className=" w-fit flex flex- md:flow-row items-center gap- space-x-2 bg-[#97EC5C] border-[4.35px] border-[#97EC5C] py- px-4 md:px-4 rounded-[21.89px]">
        <div className="w-[100px]">
          <img src={logo} alt="" className=" w-full" />
        </div>
        <span className="text-white font-bold text-base w-full tracking-[7%]  ">
          Megarabbit
        </span>
      </div>
      {/* socials */}
      <div className=" text-center">
        <h1 className=" text-[#FFD4A7]">Follow Us</h1>
        <div className=" flex">
          {icons.map((icon, idx) => (
            <div
              key={idx}
              className=" flex items-center justify-center size-12"
            >
              <img
                src={icon}
                alt=""
                className=" bg-[#97EC5C] border border-[#C3620E] p-2 rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
