import WhatsappButton from "./WhatsappButton";
import yorkshire from "../../public/yorkshire.jpg";
import Image from "next/image";

const Portada = () => {
  return (
    <div className="bg-[#83B4FF] min-h-[32rem] flex flex-row items-center justify-between">
      <div className="grid grid-rows-2 grid-flow-col gap-4 px-10 mt-5">
        <div className="size-32 rounded-full bg-center border-4 border-white shadow-lg">
          <Image
            src={yorkshire}
            width="128"
            alt="logo"
            className="rounded-full"
          />
        </div>
        <div className="size-32 rounded-full bg-center border-4 border-white shadow-lg">
          <Image
            src={yorkshire}
            width="128"
            alt="logo"
            className="rounded-full"
          />
        </div>
        <div className="w-32 h-32 rounded-full bg-center border-4 border-white shadow-lg">
          <Image
            src={yorkshire}
            width="128"
            alt="logo"
            className="rounded-full"
          />
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          ¡Consigue tu mascota!
        </h1>
        <WhatsappButton />
      </div>
    </div>
  );
};

export default Portada;
