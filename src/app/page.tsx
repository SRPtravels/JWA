import Hero from "@/components/Hero";
import Services from "@/components/Services";
import LiveOperations from "@/components/LiveOperations";
import Gallery from "@/components/Gallery";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <LiveOperations />
      <Gallery />
      <About />
    </>
  );
}
