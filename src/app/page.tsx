import Benefits from "@/components/Benefits";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Cta from "@/components/CTA";

export default function Home() {
  return (
    <main className="font-poppins">
      <Header />
      <Hero />
      <Benefits />
      <Video />
      <Testimonials />
      <About />
      <Cta />
      <Footer />
    </main>
  );
}
