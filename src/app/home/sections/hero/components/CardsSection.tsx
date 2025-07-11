import { PiHorseFill } from "react-icons/pi";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { MdAddAPhoto } from "react-icons/md";
import { FaChildren } from "react-icons/fa6";
import { MAIN_PAGE } from "@/constants/common";

export default function CardsSection() {
  const t = MAIN_PAGE.HERO_SECTION.CARDS;

  const cardData = [
    {
      title: t.card_1.title,
      text: t.card_1.description,
      icon: <PiHorseFill />,
    },
    {
      title: t.card_2.title,
      text: t.card_2.description,
      icon: <FaHandsHoldingChild />,
    },
    {
      title: t.card_3.title,
      text: t.card_3.description,
      icon: <MdAddAPhoto />,
    },
    {
      title: t.card_4.title,
      text: t.card_4.description,
      icon: <FaChildren  />,
    },
  ];

  return (
    <div className="w-full px-6 md:px-60 py-8 md:-mt-64 -mt-6 ">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="md:p-8 p-6 md:pb-16 pb-14 rounded-2xl bg-gray-100/50 backdrop-blur-sm border border-gray-100 hover:scale-105 transition-transform duration-300 relative group text-center md:text-start"
          >
            <h3 className="text-card-title mb-1 lg:mb-3">{item.title}</h3>
            <p className="text-card-description ">{item.text}</p>
            <div className="absolute right-6 bottom-4 md:bottom-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300 md:text-4xl text-2xl">
              {item.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
