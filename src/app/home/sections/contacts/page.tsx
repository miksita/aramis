import Image from "next/image";
import ContactImage from "../../../../../public/images/about.webp";
import { MAIN_PAGE } from "@/constants/common";
import TextArrow from "../../../../../public/vectors/text-arrow-contacts.svg";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { FaPhone, FaMapMarkerAlt, FaTelegram, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  const t = MAIN_PAGE.CONTACT_SECTION;

  return (
    <div className="pt-20 md:px-60 px-6">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-10 mb-8 md:mb-13">
        <h1 className="text-title flex-shrink-0 md:text-left text-center">
          <AnimatedText>{t.title}</AnimatedText>
        </h1>
        <p className="text-description md:text-left text-center max-w-2xl">
          <AnimatedText>{t.description}</AnimatedText>
        </p>
      </div>

      <section className="flex flex-col md:flex-row pt-0 gap-8">
        <div className="w-full md:w-2/5 order-1">
          <div className="rounded-2xl mb-10">
            <div className="flex items-start mb-8 md:mb-10">
              <FaPhone className="text-gray-500 mr-4 text-xl" />
              <div>
                <h3 className="md:text-card-title text-xl font-bold  mb-2">{t.phone.title}</h3>
                <a href={`tel:${t.phone.number}`} className="text-simple hover:text-blue-300">
                  {t.phone.number}
                </a>
              </div>
            </div>
            <div className="flex items-start mb-2">
              <FaMapMarkerAlt className="text-gray-500 mr-4 text-xl" />
              <div>
                <h3 className="md:text-card-title text-xl font-bold ">{t.address.title}</h3>
                <p className="text-simple hover:text-blue-300">{t.address.text}</p>
              </div>
            </div>
          </div>

          <div className="md:p-6 p-0">
            <div className="flex flex-col">
              <div className="flex space-x-6 md:space-x-8 mb-4 md:justify-start justify-center flex">
                <a href={t.social.telegram} className="">
                  <FaTelegram className="text-5xl hover:text-blue-300 hover:scale-120"  />
                </a>
                <a href={t.social.instagram} className="">
                  <FaInstagram className="text-5xl hover:text-blue-300 hover:scale-120" />
                </a>
                <a href={t.social.whatsapp} className="">
                  <FaWhatsapp className="text-5xl hover:text-blue-300 hover:scale-120" />
                </a>
              </div>
              <div className="relative w-full overflow-hidden justify-end flex">
                <Image 
                  src={TextArrow} 
                  alt="Стрелка" 
                  className="ml-0 md:mr-20 w-[200px] md:w-[280px]"
                  width={280} 
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-3/5 order-2">
          <div className="h-[250px] md:h-[300px] relative mb-6 rounded-2xl overflow-hidden">
            <Image
              src={ContactImage}
              alt="Наша конная ферма"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="text-content text-end ">
            <p className="text-simple italic text-gray-400">
              <AnimatedText>{t.additionalText}</AnimatedText>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}