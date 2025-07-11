import Image from "next/image";
import PersonalTrainingImage from "../../../../../public/images/servises/training.webp";
import KatanieImage from "../../../../../public/images/servises/pony.webp";
import ExcursionImage from "../../../../../public/images/servises/excursion.webp";
import PhotoshootImage from "../../../../../public/images/servises/photoshoot.webp";
// import { GoArrowUpRight } from "react-icons/go";
import { MAIN_PAGE } from "@/constants/common";
import { AnimatedText } from "@/components/ui/AnimatedText";

export default function ServisesSection() {
  const t = MAIN_PAGE.SERVISES_SECTION;

  const services = [
    {
      title: t.CARDS.card_1.title,
      description: t.CARDS.card_1.description,
      image: ExcursionImage,
    },
    {
      title: t.CARDS.card_2.title,
      description: t.CARDS.card_2.description,
      image: PersonalTrainingImage,
    },
    {
      title: t.CARDS.card_3.title,
      description: t.CARDS.card_3.description,
      image: PhotoshootImage,
    },
    {
      title: t.CARDS.card_4.title,
      description: t.CARDS.card_4.description,
      image: KatanieImage,
    },
  ];

  return (
    <div className="pt-20 md:pt-20 px-6 md:px-60 min-h-[80vh] pb-10 md:pb-20 text-left ">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 mb-4 md:mb-12 ">
        <h1 className="text-title flex-shrink-0 md:text-left text-center ">
          <AnimatedText>{t.title}</AnimatedText>
        </h1>
        <p className="text-description md:text-left text-center max-w-2xl">
          <AnimatedText>{t.description}</AnimatedText>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group cursor-pointer bg-white shadow-lg md:rounded-2xl rounded-xl "
          >
            <div className="h-80 md:h-100 w-full mb-3 sm:mb-4 overflow-hidden rounded-xl md:rounded-2xl relative">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110 rounded-2xl"
              />
            </div>
            <div className="flex justify-between items-start p-4 ">
              <div>
                <h3 className="text-card-title mb-2">
                  <AnimatedText>{service.title}</AnimatedText>
                </h3>
                <p className="text-card-description mb-6">
                  <AnimatedText>{service.description}</AnimatedText>
                </p>
                <button className="text-sm px-4 py-2 bg-gray-100 text-gray-500 rounded-xl text-left">Подробнее...
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="col-span-1 md:col-span-4 md:mt-6 mt-8">
          <button className="text-simple button-gray w-full">{t.button}</button>
        </div>
      </div>
    </div>
  );
}
