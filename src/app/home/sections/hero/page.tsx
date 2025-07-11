import HeroMobile from "./components/HeroMobile";
import HeroDesktop from "./components/HeroDesktop";
import CardsSection from "./components/CardsSection";

export default function Home() {
  return (
    <>
      <div className="md:hidden">
        <HeroMobile />
        <CardsSection />
      </div>

      <div className="hidden md:block relative w-full flex flex-col">
        <HeroDesktop />
        <CardsSection />
      </div>
    </>
  );
}