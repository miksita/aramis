import Image from "next/image";
import HeroBackground from "../../../../../../public/images/hero-mobile.webp";
import Logo from "../../../../../../public/icons/logo.svg";
import { MAIN_PAGE } from "@/constants/common";
import { AnimatedText } from "@/components/ui/AnimatedText";
import TextArrow from "../../../../../../public/vectors/text-arrow-mobile.svg";

export default function HeroMobile() {
  const t = MAIN_PAGE.HERO_SECTION;

  return (
    <div className="relative h-[120vh] w-full overflow-hidden mb-8">
      <div className="absolute bottom-30 left-0 right-0 z-0 h-auto ">
        <Image
          src={HeroBackground}
          alt="Фон главной страницы"
          className="object-contain"
          priority
          quality={100}
          style={{
            width: "100%",
            height: "auto",
            objectPosition: "bottom center ",
          }}
        />
      </div>

      <div className="relative z-10 flex h-full flex-col px-6">
        <div className="pt-24 px-4 text-center flex flex-col items-center">
          <Image 
            src={Logo}
            alt="Логотип Арамис"
            className="h-32 w-32 mb-4" 
          />
          <h1 className="mb-4 text-4xl font-semibold">
            <AnimatedText>{t.title_top}</AnimatedText>
          </h1>
          <p className="max-w-80 mx-auto mb-8 text-description">
            <AnimatedText>{t.description}</AnimatedText>
          </p>
        </div>

        <div className="mt-auto w-full flex flex-col items-center   ">
          <div className="mb-2 pl-10">
            <Image 
              src={TextArrow}
              alt="Ждём Вас в гости!"
              className="w-full h-12"
            />
          </div>

          <button
            className="py-3 px-8 bg-black text-white font-semibold text-lg rounded-2xl hover:bg-gray-200 hover:text-gray-800 transition-all duration-300 w-full "
            aria-label="Записаться в конный клуб"
          >
            {t.button}
          </button>
        </div>
      </div>
    </div>
  );
}