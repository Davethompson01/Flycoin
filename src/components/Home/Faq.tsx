import plusIcon from "../../assets/plus.svg";
import cloudOne from "../../assets/faqleftcloud.svg";
import cloudTwo from "../../assets/faqrightcloud.svg";
import { useState } from "react";
const Faq = () => {
  const [selected, setSelected] = useState<null | number>(null);
  const fasqs = [
    {
      question: "What makes megarabbit different from other megachain?",
      answer:
        "MegaRabbit is the first community-driven PFP launching on megaeth_labser",
    },
    { question: "How can I get megarabbit?", answer: "Memes and arts " },
    { question: "What blockchain does megarabbit run on?", answer: "Megalabs" },
  ];

  const toggleFaq = (index: number) => {
    console.log(index);
    setSelected(index === selected ? null : index);
  };
  return (
    <div className=" relative bg-[#97EC5C] div-spacing py-28 space-y-6">
      <h1 className=" text-center text-stroke w-full text-nowrap text-[#fff] text-xl sm:text-3xl md:text-4xl lg:text-5xl">
        Got Questions
      </h1>
      <div className=" space-y-4">
        {fasqs.map(({ question, answer }, idx) => (
          <div
            key={idx}
            className=" bg-[#97EC5C] border-4 border-[#97EC5C] p-4 rounded-xl px-2 lg:px-12 transition-all duration-700"
          >
            <div className=" flex items-center w-full justify-between">
              <h1 className=" text-xs sm:text-sm lg:text-lg text-[#fff]">
                {question}
              </h1>
              <img
                src={plusIcon}
                alt=""
                className=" size-6"
                // onClick={() => setIsOpen((prev) => !prev)}
                onClick={() => toggleFaq(idx)}
              />
            </div>
            {selected === idx && (
              <p className=" transition-all duration-700">{answer}</p>
            )}
          </div>
        ))}
      </div>
      <img
        src={cloudOne}
        alt=""
        className=" absolute top-16 md:top-2 left-0 size-10 mobile:size-24 md:size-48 animate-cloud-2"
      />
      <img
        src={cloudTwo}
        alt=""
        className=" absolute md:-bottom-4 right-0 size-10 mobile:size-24 md:size-48 animate-cloud-3"
      />
    </div>
  );
};

export default Faq;
