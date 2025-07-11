import Image from "next/image";
import HeroBackground from "../../../../../../public/images/hero-mobile.webp";
import Logo from "../../../../../../public/icons/logo.svg";
import { MAIN_PAGE } from "@/constants/common";
import { AnimatedText } from "@/components/ui/AnimatedText";
import TextArrow from "../../../../../../public/vectors/text-arrow-mobile.svg";

export default function HeroMobile() {
  const t = MAIN_PAGE.HERO_SECTION;

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Фон (оставлен внизу) */}
      <div className="absolute -bottom-0 left-0 right-0 z-0 h-auto">
        <Image
          src={HeroBackground}
          alt="Фон главной страницы"
          className="object-contain"
          priority
          quality={100}
          style={{
            width: "100%",
            height: "auto",
            objectPosition: "bottom center",
          }}
        />
      </div>

      {/* Основной контент */}
      <div className="relative z-10 flex h-full flex-col px-6">
        {/* Логотип и заголовок */}
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

        {/* Контейнер для стрелки и кнопки (flex-col) */}
        <div className="mt-auto pb-8 w-full flex flex-col items-center">
          {/* Стрелка над кнопкой */}
          <div className="mb-2 w-32"> {/* mb-2 - отступ между стрелкой и кнопкой */}
            <Image 
              src={TextArrow}
              alt="Ждём Вас в гости!"
              className="w-full h-auto"
            />
          </div>

          {/* Кнопка */}
          <button
            className="py-3 px-8 bg-black text-white text-lg rounded-2xl hover:bg-gray-200 hover:text-gray-800 transition-all duration-300 w-full max-w-xs"
            aria-label="Записаться в конный клуб"
          >
            {t.button}
          </button>
        </div>
      </div>
    </div>
  );
}