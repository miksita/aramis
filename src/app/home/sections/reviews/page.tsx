import { AnimatedText } from "@/components/ui/AnimatedText";
import { TestimonialsCarousel } from "@/components/ui/Carousel";
import { MAIN_PAGE } from "@/constants/common";

export default function ReviewsSection() {
const t = MAIN_PAGE.REVIEWS_SECTION;

  return (
    <section className="px-6 mt-20 md:mt-40 md:px-60">
       <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 mb-4 md:mb-13 ">
        <h1 className="text-title flex-shrink-0 md:text-left text-center">
<AnimatedText>{t.title}</AnimatedText>
        </h1>
        <p className="text-description md:text-left text-center">
          <AnimatedText>{t.description}</AnimatedText>
        </p>
      </div>
      <div className="container mx-auto  ">
        <TestimonialsCarousel testimonials={t.TESTIMONIALS}/>
      </div>
    </section>
  );
}
