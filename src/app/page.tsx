import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Works from "@/components/Works";
import CustomBorder from "@/components/CustomBorder";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <section className="mt-12 md:mt-32">
        <h1 className="capitalize text-3xl md:text-4xl font-bold leading-none">My Works</h1>
        <p className="capitalize mt-2 text-lg">few of my past and present projects</p>
        <CustomBorder />
        <Works />
      </section>
      <Contact />
    </div>
  );
}
