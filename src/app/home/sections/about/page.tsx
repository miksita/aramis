import Image from "next/image";
import AboutImage from "../../../../../public/images/about.webp";
import TextArrow from "../../../../../public/vectors/text-arrow-about.svg";
import { MAIN_PAGE } from "@/constants/common";
import { AnimatedText } from "@/components/ui/AnimatedText";

export default function AboutSection() {
  const t = MAIN_PAGE.ABOUT_SECTION;

  return (
    <section className="flex flex-col md:flex-row pt-0 md:pt-20 md:pb-20 md:px-60 px-6 min-h-[40vh]">
      <div className="w-full lg:w-2/5 h-[300px] lg:h-[400px] order-1 relative">
        <Image
          src={AboutImage}
          alt="Наша конная ферма в Приморском крае"
          fill
          className="object-cover rounded-2xl"
          priority
          style={{ aspectRatio: "16/9" }}
        />
      </div>

      <div className="w-full md:w-3/5 md:pr-6 order-2 md:pl-16 md:text-left text-center pt-14 md:pt-0">
        <h1 className="text-title mb-6"><AnimatedText>{t.title}</AnimatedText></h1>
        <div className="text-content">
          <p className="mb-10 text-simple"><AnimatedText>{t.description}</AnimatedText></p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <button
            className="md:text-simple text-xl button-gray md:w-auto w-full mb-6 md:mb-0"
            aria-label="Узнать больше о нашей конной ферме"
          >
            {t.button}
          </button>
          <div className="relative md:self-start md:ml-60 w-full max-w-[280px] mx-auto md:mx-0">
            <Image 
              src={TextArrow} 
              alt="Стрелка" 
              className="w-full scale-80 md:scale-100 "
              width={280}
              height={60}
              style={{
                transform: 'scale(1.1)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}