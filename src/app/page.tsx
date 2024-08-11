import Extras from "@/components/Extras";
import NavBar from "@/components/Navbar";
import Portada from "@/components/Portada";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Portada />
      <Reviews />
      <Extras />
    </main>
  );
}
