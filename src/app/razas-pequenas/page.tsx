import Image from "next/image";
import WhatsappButton from "@/components/WhatsappButton";
import salchicha from "../../../public/salchicha-removebg-preview.png";
import shih_tzu from "../../../public/shih_tzu-removebg-preview.png";
import yorkshire from "../../../public/yorkshire-removebg-preview.png";
import pomerania from "../../../public/pomerania-removebg-preview.png";
import chihuahua from "../../../public/chihuahua-removebg-preview.png";
import pincher from "../../../public/pincher-removebg-preview.png";

export default function Razas_pequenas() {
  return (
    <main className="pt-10 w-full">
      <div className="flex flex-col justify-center items-center scroll-mt-20 p-5 mt-10">
        <h2 className="flex text-black text-5xl font-bold max-sm:text-3xl">
          Razas pequeñas
        </h2>
      </div>
      <div className="mt-4 grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 items-start w-full gap-2 justify-items-center px-28 max-lg:px-0">
        <div className="flex flex-col justify-center items-center w-[280px] py-6 text-black px-2">
          <div className="relative flex justify-center items-center w-[120px] h-[120px] rounded-full bg-[#83B4FF]">
            <Image
              src={salchicha}
              alt="golden"
              width={200}
              height={200}
              className="rounded-2xl object-cover absolute top-[-15px]"
            />
          </div>
          <p className="text-center font-bold mt-5 max-sm:mt-3 text-lg italic">
            TECKEL (DACHSHUND)
          </p>
          <p className="text-justify font-normal mt-3 max-sm:text-sm max-sm:mt-2 px-3">
            Perro de cuerpo largo y patas cortas (4–6 kg). El Dachshund es
            valiente, leal y muy curioso. Es un excelente compañero tanto para
            familias como para personas solas, adaptándose bien a espacios
            reducidos.
          </p>
          <p className="text-center font-extrabold my-3 italic">
            Precio desde:
          </p>
          <p className="text-center font-bold mb-3">1'600.000</p>
          <WhatsappButton />
        </div>
        <div className="flex flex-col justify-center items-center w-[280px] py-6 text-black px-2">
          <div className="relative flex justify-center items-center w-[120px] h-[120px] rounded-full bg-[#83B4FF]">
            <Image
              src={shih_tzu}
              alt="golden"
              width={200}
              height={200}
              className="rounded-2xl object-cover absolute top-[-15px]"
            />
          </div>
          <p className="text-center font-bold mt-5 max-sm:mt-3 text-lg italic">
            SHIH TZU
          </p>
          <p className="text-justify font-normal mt-3 max-sm:text-sm max-sm:mt-2 px-3">
            Compacto y elegante (4–7 kg), el Shih Tzu destaca por su naturaleza
            afectuosa, tranquila y sociable. Es ideal para la vida en
            apartamento y requiere cepillados regulares para mantener su hermoso
            pelaje.
          </p>
          <p className="text-center font-extrabold my-3 italic">
            Precio desde:
          </p>
          <p className="text-center font-bold mb-3">1'200.000</p>
          <WhatsappButton />
        </div>
        <div className="flex flex-col justify-center items-center w-[280px] py-6 text-black px-2">
          <div className="relative flex justify-center items-center w-[120px] h-[120px] rounded-full bg-[#83B4FF]">
            <Image
              src={yorkshire}
              alt="golden"
              width={200}
              height={200}
              className="rounded-2xl object-cover absolute top-[-15px]"
            />
          </div>
          <p className="text-center font-bold mt-5 max-sm:mt-3 text-lg italic">
            YORKSHIRE TERRIER
          </p>
          <p className="text-justify font-normal mt-3 max-sm:text-sm max-sm:mt-2 px-3">
            De tamaño muy pequeño (2–3.5 kg), el Yorkshire Terrier es enérgico,
            valiente y muy apegado a su familia. Perfecto para quienes buscan un
            perro alerta y adaptable a espacios pequeños.
          </p>
          <p className="text-center font-extrabold my-3 italic">
            Precio desde:
          </p>
          <p className="text-center font-bold mb-3">1'800.000</p>
          <WhatsappButton />
        </div>
        <div className="flex flex-col justify-center items-center w-[280px] py-6 text-black px-2">
          <div className="relative flex justify-center items-center w-[120px] h-[120px] rounded-full bg-[#83B4FF]">
            <Image
              src={pomerania}
              alt="golden"
              width={200}
              height={200}
              className="rounded-2xl object-cover absolute top-[-15px]"
            />
          </div>
          <p className="text-center font-bold mt-5 max-sm:mt-3 text-lg italic">
            POMERANIA
          </p>
          <p className="text-justify font-normal mt-3 max-sm:text-sm max-sm:mt-2 px-3">
            Miniatura de energía (2–3 kg), el Pomerania es juguetón, curioso y
            muy leal. Su hermoso pelaje esponjoso requiere cuidados, y su tamaño
            compacto lo hace ideal para cualquier tipo de hogar.
          </p>
          <p className="text-center font-extrabold my-3 italic">
            Precio desde:
          </p>
          <p className="text-center font-bold mb-3">1'900.000</p>
          <WhatsappButton />
        </div>
        <div className="flex flex-col justify-center items-center w-[280px] py-6 text-black px-2">
          <div className="relative flex justify-center items-center w-[120px] h-[120px] rounded-full bg-[#83B4FF]">
            <Image
              src={chihuahua}
              alt="golden"
              width={200}
              height={200}
              className="rounded-2xl object-cover absolute top-[-15px]"
            />
          </div>
          <p className="text-center font-bold mt-5 max-sm:mt-3 text-lg italic">
            CHIHUAHUA
          </p>
          <p className="text-justify font-normal mt-3 max-sm:text-sm max-sm:mt-2 px-3">
            Considerado el perro más pequeño del mundo (1.5–3 kg), el Chihuahua
            es valiente, inteligente y protector. Su tamaño diminuto contrasta
            con su personalidad fuerte y activa.
          </p>
          <p className="text-center font-extrabold my-3 italic">
            Precio desde:
          </p>
          <p className="text-center font-bold mb-3">2'000.000</p>
          <WhatsappButton />
        </div>
        <div className="flex flex-col justify-center items-center w-[280px] py-6 text-black px-2">
          <div className="relative flex justify-center items-center w-[120px] h-[120px] rounded-full bg-[#83B4FF]">
            <Image
              src={pincher}
              alt="golden"
              width={200}
              height={200}
              className="rounded-2xl object-cover absolute top-[-15px]"
            />
          </div>
          <p className="text-center font-bold mt-5 max-sm:mt-3 text-lg italic">
            PINSCHER
          </p>
          <p className="text-justify font-normal mt-3 max-sm:text-sm max-sm:mt-2 px-3">
            Ágil, elegante y muy vivaz (4–6 kg), el Pinscher Miniatura es un
            excelente perro guardián en miniatura. Requiere ejercicio regular y
            es muy leal a su familia.
          </p>
          <p className="text-center font-extrabold my-3 italic">
            Precio desde:
          </p>
          <p className="text-center font-bold mb-3">900.000</p>
          <WhatsappButton />
        </div>
      </div>
      <p className="text-md text-black text-center 2xl:px-32 max-sm:text-lg max-sm:px-1 max-lg:px-5 max-md:px-5 max-2xl:px-5 pt-8 italic">
        Los precios están sujetos a modificaciones dependiendo del SEXO, COLOR o
        TIPO DE PELAJE de cada ejemplar, si deseas conocer la disponibilidad
        puedes comunicarte con nosotros!
      </p>
    </main>
  );
}
