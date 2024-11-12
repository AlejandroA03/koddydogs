import SwiperComponent from "./SwiperComponent";
import WhatsappButton from "./WhatsappButton";

const Races: React.FC = () => {
  return (
    <div
      id="race"
      className="flex flex-col justify-center items-center text-black scroll-mt-20 max-sm:scroll-mt-0"
    >
      <h2 className="flex text-5xl font-bold p-5 mt-5">Razas</h2>
      <SwiperComponent />
      <WhatsappButton />
    </div>
  );
};

export default Races;
