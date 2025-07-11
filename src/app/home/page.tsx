import Hero from "./sections/hero/page"
import AboutSection from "./sections/about/page"
import ServisesSection from "./sections/servises/page"
import WhySection from "./sections/why/page"

export default function Home() {
    return(
        <>
        <Hero />
        <AboutSection />
        <ServisesSection />
        <WhySection />
        </>
    )
}