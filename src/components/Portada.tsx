import WhatsappButton from "./WhatsappButton";
import yorkshire from "../../public/yorkshire.jpg";
import Image from "next/image";

const Portada = () => {
  return (
    <div className="bg-[#83B4FF] flex flex-row place-items-end justify-center pt-10 h-fit">
      <div className="grid grid-rows-2 grid-flow-col mt-20 -mb-28 mx-20">
        <div className="size-32 rounded-full bg-center border-4 border-white shadow-lg">
          <Image
            src={yorkshire}
            width="128"
            alt="logo"
            className="rounded-full"
          />
        </div>
        <div className="size-48 rounded-full bg-center border-4 border-white shadow-lg -mt-10">
          <Image
            src={yorkshire}
            width="192"
            alt="logo"
            className="rounded-full"
          />
        </div>
        <div className="size-64 rounded-full bg-center border-4 border-white shadow-lg mt-10 -ml-16">
          <Image
            src={yorkshire}
            width="248"
            alt="logo"
            className="rounded-full"
          />
        </div>
      </div>
      <div className="p-10 flex flex-col self-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6 text-center px-10">
          ¡Consigue tu mascota!
        </h1>
        <WhatsappButton />
      </div>
    </div>
  );
};

export default Portada;
