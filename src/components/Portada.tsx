import WhatsappButton from "./WhatsappButton";
import portada1 from "../../public/portada1.jpeg";
import portada2 from "../../public/portada2.jpeg";
import portada3 from "../../public/portada3.jpeg";
import Image from "next/image";

const Portada = () => {
  return (
    <div className="bg-[radial-gradient(circle_at_29%_55%,_hsla(329,0%,99%,0.05)_0%,_hsla(329,0%,99%,0.05)_4%,_transparent_4%,_transparent_44%,_transparent_44%,_transparent_100%),_radial-gradient(circle_at_85%_89%,_hsla(329,0%,99%,0.05)_0%,_hsla(329,0%,99%,0.05)_51%,_transparent_51%,_transparent_52%,_transparent_52%,_transparent_100%),_radial-gradient(circle_at_6%_90%,_hsla(329,0%,99%,0.05)_0%,_hsla(329,0%,99%,0.05)_53%,_transparent_53%,_transparent_64%,_transparent_64%,_transparent_100%),_radial-gradient(circle_at_35%_75%,_hsla(329,0%,99%,0.05)_0%,_hsla(329,0%,99%,0.05)_6%,_transparent_6%,_transparent_98%,_transparent_98%,_transparent_100%),_radial-gradient(circle_at_56%_75%,_hsla(329,0%,99%,0.05)_0%,_hsla(329,0%,99%,0.05)_16%,_transparent_16%,_transparent_23%,_transparent_23%,_transparent_100%),_radial-gradient(circle_at_42%_0%,_hsla(329,0%,99%,0.05)_0%,_hsla(329,0%,99%,0.05)_3%,_transparent_3%,_transparent_26%,_transparent_26%,_transparent_100%),_radial-gradient(circle_at_29%_28%,_hsla(329,0%,99%,0.05)_0%,_hsla(329,0%,99%,0.05)_51%,_transparent_51%,_transparent_75%,_transparent_75%,_transparent_100%),_radial-gradient(circle_at_77%_21%,_hsla(329,0%,99%,0.05)_0%,_hsla(329,0%,99%,0.05)_35%,_transparent_35%,_transparent_55%,_transparent_55%,_transparent_100%),_radial-gradient(circle_at_65%_91%,_hsla(329,0%,99%,0.05)_0%,_hsla(329,0%,99%,0.05)_46%,_transparent_46%,_transparent_76%,_transparent_76%,_transparent_100%),_linear-gradient(45deg,_rgb(83,_91,_235),_rgb(131,_180,_255))] flex flex-row place-items-end justify-center pt-10 h-fit w-[100%] max-sm:flex-col max-md:flex-col">
      <div className="grid grid-rows-2 grid-flow-col mt-20 -mb-28 mx-20">
        <div className="size-32 rounded-full bg-center border-4 border-white shadow-lg max-sm:size-20 max-sm:ml-10 max-sm:-mt-7 max-sm:border-2 max-sm:-mr-4">
          <Image
            src={portada1}
            width="128"
            alt="logo"
            className="rounded-full"
          />
        </div>
        <div className="size-48 rounded-full bg-center border-4 border-white shadow-lg -mt-10 max-sm:size-28 max-sm:border-2 max-sm:-mt-12 max-sm:ml-4 max-sm:-mr-2">
          <Image
            src={portada3}
            width="192"
            alt="logo"
            className="rounded-full"
          />
        </div>
        <div className="size-64 rounded-full bg-center border-4 border-white shadow-lg mt-10 -ml-16 max-sm:size-36 max-sm:-ml-2 max-sm:border-2 max-sm:mt-4 max-sm:mb-7 max-sm:-mr-10">
          <Image
            src={portada2}
            width="248"
            alt="logo"
            className="rounded-full"
          />
        </div>
      </div>
      <div className="p-10 flex flex-col self-center max-sm:p-2 max-lg:p-2 md:-ml-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-6 text-center px-10 max-sm:text-4xl max-sm:px-2 max-lg:px-2">
          ¡Consigue tu mascota!
        </h1>
        <WhatsappButton />
      </div>
    </div>
  );
};

export default Portada;
