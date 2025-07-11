import Image from "next/image";
import BgImage from "../../../../../../public/images/hero.webp";
import { MAIN_PAGE } from '@/constants/common';
import { AnimatedText } from "@/components/ui/AnimatedText";
import TextArrow from "../../../../../../public/vectors/text-arrow-desktop.svg"

export default function HeroDesktop() {
  
  const t = MAIN_PAGE.HERO_SECTION;

  return (
    <div className="relative w-full min-h-screen flex pb-24">
      <div className="w-full max-w-[1920px] mx-auto flex relative">
        <div className="w-1/3 bg-white flex-shrink-0"></div>
        
        <div className="w-2/3 relative flex-shrink-0 h-240 overflow-visible">
          <div className="absolute right-0 top-0 h-full" style={{ width: '200%' }}>
            <Image
              src={BgImage}
              alt="Конный клуб Арамис"
              fill
              style={{ 
                objectFit: 'contain',
                objectPosition: 'right'
              }}
              priority
            />
          </div>
        </div>

        <div className="absolute inset-0 flex items-start text-left pl-60">
          <div className="w-full max-w-[1920px] mx-auto pl-4">
            <div className="w-4/6">
              <h1 className="text-6xl font-semibold mb-10 mt-60"><AnimatedText>{t.title_top}</AnimatedText>
                <span className=""><AnimatedText>{t.title_down}</AnimatedText></span>
              </h1>
             
              <p className="mb-24 w-3/5 text-description"><AnimatedText>{t.description}</AnimatedText></p>
              
              <div className="relative">
                <button
                  className="py-4 px-16 bg-black text-white text-2xl rounded-3xl hover:bg-gray-200 hover:text-gray-800 transition-all duration-300"
                  aria-label="Записаться в конный клуб"
                >
                  {t.button}
                </button>
                <div className="absolute -bottom-20 left-0 w-full">
                  <Image
                    src={TextArrow}
                    alt="Ждём Вас в гости!"
                    className="w-auto h-32 ml-28" // Подстройте размеры и отступы по вашему дизайну
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}