import Link from "next/link";
import ImageCarousel from "./ImageCarrusel";
import salchicha from "../../public/salchicha-removebg-preview.png";
import shih_tzu from "../../public/shih_tzu-removebg-preview.png";
import yorkshire from "../../public/yorkshire-removebg-preview.png";
import pomerania from "../../public/pomerania-removebg-preview.png";
import chihuahua from "../../public/chihuahua-removebg-preview.png";
import pincher from "../../public/pincher-removebg-preview.png";
import cocker_spaniel from "../../public/cocker_spaniel-removebg-preview.png";
import bulldog_frances from "../../public/bulldog_frances-removebg-preview.png";
import bulldog_ingles from "../../public/bulldog_ingles-removebg-preview.png";
import golden from "../../public/golden_retriever-removebg-preview.png";
import border_collie from "../../public/border_collie-removebg-preview.png";
import beagle from "../../public/beagle-removebg-preview.png";
import rottweiler from "../../public/rottweiler-removebg-preview.png";
import doberman from "../../public/doberman-removebg-preview.png";
import husky from "../../public/husky-removebg-preview.png";
import pastor_belga from "../../public/pastor_belga-removebg-preview.png";
import pastor_aleman from "../../public/pastor_aleman-removebg-preview.png";

const RacesButtons = () => {
  const pequenas = [
    salchicha,
    shih_tzu,
    yorkshire,
    pomerania,
    chihuahua,
    pincher,
  ];
  const medianas = [
    cocker_spaniel,
    bulldog_frances,
    bulldog_ingles,
    golden,
    border_collie,
    beagle,
  ];
  const grandes = [rottweiler, doberman, husky, pastor_aleman, pastor_belga];

  return (
    <div className="w-[70%] flex-col flex justify-center items-center max-md:w-[100%] mb-8">
      <Link
        href={"/razas-pequenas"}
        className="grid grid-cols-3 mb-4 px-4 py-2 bg-gradient-to-r from-[#6489c0] via-[#83B4FF] to-[#5573a1] text-white font-extrabold text-5xl rounded-full shadow-2xl hover:from-blue-300 hover:via-blue-400 hover:to-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-70 active:bg-blue-800 active:shadow-inner transform hover:scale-110 transition duration-500 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed ml-4 w-[90%] justify-between max-sm:text-xl place-items-center"
      >
        <ImageCarousel images={pequenas} className="" />
        <div className="m-2 mr-8 col-span-2 max-sm:mr-2 max-sm:ml-5">
          Razas Pequeñas
          <p className="mt-5 font-light text-xl max-sm:mt-0 max-sm:text-lg">
            ¡Conoce más!
          </p>
        </div>
      </Link>
      <Link
        href={"/razas-medianas"}
        className="grid grid-cols-3 mb-4 px-4 py-2 bg-gradient-to-r from-[#6489c0] via-[#83B4FF] to-[#5573a1] text-white font-extrabold text-5xl rounded-full shadow-2xl hover:from-blue-300 hover:via-blue-400 hover:to-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-70 active:bg-blue-800 active:shadow-inner transform hover:scale-110 transition duration-500 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed ml-4 w-[90%] justify-between max-sm:text-xl place-items-center"
      >
        <ImageCarousel images={medianas} className="" />
        <div className="m-2 mr-10 col-span-2 max-sm:mr-2 max-sm:ml-5">
          Razas Medianas
          <p className="mt-5 font-light text-xl max-sm:mt-0 max-sm:text-lg">
            ¡Conoce más!
          </p>
        </div>
      </Link>
      <Link
        href={"/razas-grandes"}
        className="grid grid-cols-3 mb-4 px-4 py-2 bg-gradient-to-r from-[#6489c0] via-[#83B4FF] to-[#5573a1] text-white font-extrabold text-5xl rounded-full shadow-2xl hover:from-blue-300 hover:via-blue-400 hover:to-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-70 active:bg-blue-800 active:shadow-inner transform hover:scale-110 transition duration-500 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed ml-4 w-[90%] justify-between max-sm:text-xl place-items-center"
      >
        <ImageCarousel images={grandes} className="" />
        <div className="m-2 mr-10 col-span-2 max-sm:mr-2 max-sm:ml-5">
          Razas Grandes
          <p className="mt-5 font-light text-xl max-sm:mt-0 max-sm:text-lg">
            ¡Conoce más!
          </p>
        </div>
      </Link>
    </div>
  );
};

export default RacesButtons;
