import Image from "next/image";
import WhyImage from "../../../../../public/images/about.webp";
import { MAIN_PAGE } from "@/constants/common";
import { AnimatedText } from "@/components/ui/AnimatedText";

export default function WhySection() {
  const t = MAIN_PAGE.WHY_SECTION;

  const cardsData = [
    {
      value: t.cards.card_1.title,
      description: t.cards.card_1.description,
    },
    {
      value: t.cards.card_2.title,
      description: t.cards.card_2.description,
    },
    {
      value: t.cards.card_3.title,
      description: t.cards.card_3.description,
    },
  ];

  return (
    <main className="px-6 md:px-60 md:pt-20">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 mb-4 md:mb-2">
        <h1 className="text-title flex-shrink-0 md:text-left text-center">
<AnimatedText>{t.title}</AnimatedText>
        </h1>
        <p className="text-description md:text-left text-center">
          <AnimatedText>{t.description}</AnimatedText>
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-[65%_35%] gap-6 md:pt-10">
        <figure className="relative h-[300px] md:h-[50vh] w-full">
          <Image
            src={WhyImage}
            fill
            className="object-cover rounded-xl md:rounded-3xl"
            alt="Наша конная ферма"
            priority
            style={{ aspectRatio: "16/9" }}
          />
        </figure>

        <div className="flex flex-col h-fit md:pt-2 md:gap-2 gap-4">
          {cardsData.map((card, index) => (
            <article
              key={index}
              className="bg-white/50 backdrop-blur-lg p-6 shadow-lg rounded-2xl transition-all hover:scale-[1.02] md:-ml-16 md:min-h-35"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-6 pt-2">
                <h3 className="text-4xl md:text-6xl font-light md:w-[30%]">
                  {card.value}
                </h3>
                <p className="text-card-description md:w-[70%] mt-1 md:mt-0 md:pt-2">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}