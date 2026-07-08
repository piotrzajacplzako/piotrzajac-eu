import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Journey from "@/components/sections/Journey";
import Ventures from "@/components/sections/Ventures";
import Newsletter from "@/components/sections/Newsletter";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main">
        <Hero />
        <Stats />
        <About />
        <Journey />
        <Ventures />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
