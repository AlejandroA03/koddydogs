import RacesButtons from "./RacesButtons";
import WhatsappButton from "./WhatsappButton";

const Races: React.FC = () => {
  return (
    <div
      id="race"
      className="flex flex-col justify-center items-center text-black scroll-mt-20 "
    >
      <h2 className="flex text-5xl font-bold p-5 mt-5 max-sm:text-3xl">
        Encuentra tu compañero ideal
      </h2>
      <RacesButtons />
      <WhatsappButton />
    </div>
  );
};

export default Races;
