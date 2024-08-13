import Hero from "@/components/(sections)/Hero";
import Process from "@/components/(sections)/Process";
import Showcase from "@/components/(sections)/Showcase";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar position="fixed" bgColor="white" backdropBlur={false} />
      <Hero />
      <Process />
      <Showcase />
      <Footer />
    </>
  );
}
