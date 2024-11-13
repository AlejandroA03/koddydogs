import About from "@/components/About";
import Contact from "@/components/Contact";
import Extras from "@/components/Extras";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import Portada from "@/components/Portada";
import Races from "@/components/Races";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Portada />
      <About />
      <Reviews />
      <Extras />
      <Races />
      <Contact />
      <Footer />
    </main>
  );
}
