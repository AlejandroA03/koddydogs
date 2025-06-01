import Image from "next/image";
import WhatsappButton from "@/components/WhatsappButton";
import cocker_spaniel from "../../../public/cocker_spaniel-removebg-preview.png";
import bulldog_frances from "../../../public/bulldog_frances-removebg-preview.png";
import bulldog_ingles from "../../../public/bulldog_ingles-removebg-preview.png";
import golden from "../../../public/golden_retriever-removebg-preview.png";
import border_collie from "../../../public/border_collie-removebg-preview.png";
import beagle from "../../../public/beagle-removebg-preview.png";
export default function Razas_medianas() {
  return (
    <main className="pt-10 w-full">
      <div className="flex flex-col justify-center items-center scroll-mt-20 p-5 mt-10">
        <h2 className="flex text-black text-5xl font-bold max-sm:text-3xl">
          Razas medianas
        </h2>
      </div>
      <div className="mt-4 grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 items-start w-full gap-2 justify-items-center px-28 max-lg:px-0">
        <div className="flex flex-col justify-center items-center w-[280px] py-6 text-black px-2">
          <div className="relative flex justify-center items-center w-[120px] h-[120px] rounded-full bg-[#83B4FF]">
            <Image
              src={cocker_spaniel}
              alt="golden"
              width={200}
              height={200}
              className="rounded-2xl object-cover absolute top-[-15px]"
            />
          </div>
          <p className="text-center font-bold mt-5 max-sm:mt-3 text-lg italic">
            COCKER SPANIEL
          </p>
          <p className="text-justify font-normal mt-3 max-sm:text-sm max-sm:mt-2 px-3">
            De tamaño compacto y elegante (12–16 kg), el Cocker Spaniel es
            alegre, cariñoso y juguetón. Excelentes compañeros familiares,
            disfrutan de la actividad física y requieren cepillados frecuentes
            para mantener su hermoso pelaje.
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
              src={bulldog_frances}
              alt="golden"
              width={200}
              height={200}
              className="rounded-2xl object-cover absolute top-[-15px]"
            />
          </div>
          <p className="text-center font-bold mt-5 max-sm:mt-3 text-lg italic">
            BULLDOG FRANCES
          </p>
          <p className="text-justify font-normal mt-3 max-sm:text-sm max-sm:mt-2 px-3">
            Robusto y encantador (9–14 kg), el Bulldog Francés es un excelente
            perro de compañía. De carácter afectuoso y algo perezoso, se adapta
            muy bien a la vida en apartamentos.
          </p>
          <p className="text-center font-extrabold my-3 italic">
            Precio desde:
          </p>
          <p className="text-center font-bold mb-3">1'400.000</p>
          <WhatsappButton />
        </div>
        <div className="flex flex-col justify-center items-center w-[280px] py-6 text-black px-2">
          <div className="relative flex justify-center items-center w-[120px] h-[120px] rounded-full bg-[#83B4FF]">
            <Image
              src={bulldog_ingles}
              alt="golden"
              width={200}
              height={200}
              className="rounded-2xl object-cover absolute top-[-15px]"
            />
          </div>
          <p className="text-center font-bold mt-5 max-sm:mt-3 text-lg italic">
            BULLDOG INGLES
          </p>
          <p className="text-justify font-normal mt-3 max-sm:text-sm max-sm:mt-2 px-3">
            Fuerte y de carácter tranquilo (18–25 kg), el Bulldog Inglés es
            conocido por su apariencia imponente y su ternura. Ideal para
            hogares tranquilos, requiere cuidados especiales debido a su
            estructura física.
          </p>
          <p className="text-center font-extrabold my-3 italic">
            Precio desde:
          </p>
          <p className="text-center font-bold mb-3">2'400.000</p>
          <WhatsappButton />
        </div>
        <div className="flex flex-col justify-center items-center w-[280px] py-6 text-black px-2">
          <div className="relative flex justify-center items-center w-[120px] h-[120px] rounded-full bg-[#83B4FF]">
            <Image
              src={golden}
              alt="golden"
              width={200}
              height={200}
              className="rounded-2xl object-cover absolute top-[-15px]"
            />
          </div>
          <p className="text-center font-bold mt-5 max-sm:mt-3 text-lg italic">
            GOLDEN RETRIEVER
          </p>
          <p className="text-justify font-normal mt-3 max-sm:text-sm max-sm:mt-2 px-3">
            De tamaño Mediano-Grande y temperamento equilibrado (25–34 kg), el
            Golden Retriever es uno de los perros más populares del mundo por su
            carácter amigable, leal y paciente. Son excelentes con niños, muy
            inteligentes y fáciles de entrenar. Necesitan ejercicio diario y
            disfrutan de actividades al aire libre como nadar y correr.
          </p>
          <p className="text-center font-extrabold my-3 italic">
            Precio desde:
          </p>
          <p className="text-center font-bold mb-3">1'300.000</p>
          <WhatsappButton />
        </div>
        <div className="flex flex-col justify-center items-center w-[280px] py-6 text-black px-2">
          <div className="relative flex justify-center items-center w-[120px] h-[120px] rounded-full bg-[#83B4FF]">
            <Image
              src={border_collie}
              alt="golden"
              width={200}
              height={200}
              className="rounded-2xl object-cover absolute top-[-15px]"
            />
          </div>
          <p className="text-center font-bold mt-5 max-sm:mt-3 text-lg italic">
            BORDER COLLIE
          </p>
          <p className="text-justify font-normal mt-3 max-sm:text-sm max-sm:mt-2 px-3">
            Inteligente y ágil (14–20 kg), el Border Collie es considerado uno
            de los perros más inteligentes del mundo. Perfecto para familias
            activas, necesita mucho ejercicio y estimulación mental diaria para
            ser feliz.
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
              src={beagle}
              alt="golden"
              width={200}
              height={200}
              className="rounded-2xl object-cover absolute top-[-15px]"
            />
          </div>
          <p className="text-center font-bold mt-5 max-sm:mt-3 text-lg italic">
            BEAGLE
          </p>
          <p className="text-justify font-normal mt-3 max-sm:text-sm max-sm:mt-2 px-3">
            Pequeño pero robusto (9–15 kg), el Beagle es amigable, curioso y
            siempre enérgico. Gracias a su excelente olfato y su naturaleza
            sociable, es ideal para familias con niños y hogares activos.
          </p>
          <p className="text-center font-extrabold my-3 italic">
            Precio desde:
          </p>
          <p className="text-center font-bold mb-3">1'200.000</p>
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
