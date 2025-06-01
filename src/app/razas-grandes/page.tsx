import Image from "next/image";
import WhatsappButton from "@/components/WhatsappButton";
import rottweiler from "../../../public/rottweiler-removebg-preview.png";
import doberman from "../../../public/doberman-removebg-preview.png";
import husky from "../../../public/husky-removebg-preview.png";
import pastor_belga from "../../../public/pastor_belga-removebg-preview.png";
import pastor_aleman from "../../../public/pastor_aleman-removebg-preview.png";
export default function Razas_grandes() {
  return (
    <main className="pt-10 w-full">
      <div className="flex flex-col justify-center items-center scroll-mt-20 p-5 mt-10">
        <h2 className="flex text-black text-5xl font-bold max-sm:text-3xl">
          Razas grandes
        </h2>
      </div>
      <div className="mt-4 grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 items-start w-full gap-2 justify-items-center px-28 max-lg:px-0">
        <div className="flex flex-col justify-center items-center w-[280px] py-6 text-black px-2">
          <div className="relative flex justify-center items-center w-[120px] h-[120px] rounded-full bg-[#83B4FF]">
            <Image
              src={rottweiler}
              alt="golden"
              width={200}
              height={200}
              className="rounded-2xl object-cover absolute top-[-15px]"
            />
          </div>
          <p className="text-center font-bold mt-5 max-sm:mt-3 text-lg italic">
            ROTTWEILER
          </p>
          <p className="text-justify font-normal mt-3 max-sm:text-sm max-sm:mt-2 px-3">
            Robusto y seguro de sí mismo (35–60 kg), el Rottweiler es un
            excelente perro guardián y compañero leal. Inteligente, protector y
            obediente, requiere una socialización y entrenamiento firmes desde
            temprana edad.
          </p>
          <p className="text-center font-extrabold my-3 italic">
            Precio desde:
          </p>
          <p className="text-center font-bold mb-3">1'500.000</p>
          <WhatsappButton />
        </div>
        <div className="flex flex-col justify-center items-center w-[280px] py-6 text-black px-2">
          <div className="relative flex justify-center items-center w-[120px] h-[120px] rounded-full bg-[#83B4FF]">
            <Image
              src={doberman}
              alt="golden"
              width={200}
              height={200}
              className="rounded-2xl object-cover absolute top-[-15px]"
            />
          </div>
          <p className="text-center font-bold mt-5 max-sm:mt-3 text-lg italic">
            DOBERMAN
          </p>
          <p className="text-justify font-normal mt-3 max-sm:text-sm max-sm:mt-2 px-3">
            Elegante, atlético y protector (30–45 kg), el Doberman es conocido
            por su lealtad e inteligencia. Ideal para familias activas, necesita
            ejercicio regular y un manejo firme pero cariñoso.
          </p>
          <p className="text-center font-extrabold my-3 italic">
            Precio desde:
          </p>
          <p className="text-center font-bold mb-3">1'700.000</p>
          <WhatsappButton />
        </div>
        <div className="flex flex-col justify-center items-center w-[280px] py-6 text-black px-2">
          <div className="relative flex justify-center items-center w-[120px] h-[120px] rounded-full bg-[#83B4FF]">
            <Image
              src={husky}
              alt="golden"
              width={200}
              height={200}
              className="rounded-2xl object-cover absolute top-[-15px]"
            />
          </div>
          <p className="text-center font-bold mt-5 max-sm:mt-3 text-lg italic">
            HUSKY SIBERIANO
          </p>
          <p className="text-justify font-normal mt-3 max-sm:text-sm max-sm:mt-2 px-3">
            De espíritu libre y enérgico (20–27 kg), el Husky Siberiano es
            famoso por su resistencia y belleza. Amistoso, sociable y algo
            independiente, requiere ejercicio intenso y espacios amplios para
            liberar su energía.
          </p>
          <p className="text-center font-extrabold my-3 italic">
            Precio desde:
          </p>
          <p className="text-center font-bold mb-3">1'500.000</p>
          <WhatsappButton />
        </div>
        <div className="flex flex-col justify-center items-center w-[280px] py-6 text-black px-2">
          <div className="relative flex justify-center items-center w-[120px] h-[120px] rounded-full bg-[#83B4FF]">
            <Image
              src={pastor_belga}
              alt="golden"
              width={200}
              height={200}
              className="rounded-2xl object-cover absolute top-[-15px]"
            />
          </div>
          <p className="text-center font-bold mt-5 max-sm:mt-3 text-lg italic">
            PASTOR BELGA MALINOIS
          </p>
          <p className="text-justify font-normal mt-3 max-sm:text-sm max-sm:mt-2 px-3">
            Ágil, inteligente y protector (25–30 kg), el Pastor Belga Malinois
            es ideal para tareas de protección, entrenamiento avanzado y
            familias activas. Necesita ejercicio constante y retos mentales para
            estar equilibrado.
          </p>
          <p className="text-center font-extrabold my-3 italic">
            Precio desde:
          </p>
          <p className="text-center font-bold mb-3">1'500.000</p>
          <WhatsappButton />
        </div>
        <div className="flex flex-col justify-center items-center w-[280px] py-6 text-black px-2">
          <div className="relative flex justify-center items-center w-[120px] h-[120px] rounded-full bg-[#83B4FF]">
            <Image
              src={pastor_aleman}
              alt="golden"
              width={200}
              height={200}
              className="rounded-2xl object-cover absolute top-[-15px]"
            />
          </div>
          <p className="text-center font-bold mt-5 max-sm:mt-3 text-lg italic">
            PASTOR ALEMAN
          </p>
          <p className="text-justify font-normal mt-3 max-sm:text-sm max-sm:mt-2 px-3">
            Inteligente, leal y versátil (30–40 kg), el Pastor Alemán es una de
            las razas más populares del mundo. Excelente como perro de familia,
            de trabajo o de protección, necesita actividad física y mental
            diaria.
          </p>
          <p className="text-center font-extrabold my-3 italic">
            Precio desde:
          </p>
          <p className="text-center font-bold mb-3">1'400.000</p>
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
