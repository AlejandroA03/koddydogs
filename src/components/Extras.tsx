import Image from "next/image";
import cert from "../../public/certificado.jpg";
import recomendations from "../../public/recomendaciones.jpg";
import kit from "../../public/kit.jpeg";

const Extras = () => {
  return (
    <div className="flex flex-col justify-center items-center text-black">
      <h2 className="flex text-5xl font-bold p-5 mt-5 max-sm:text-3xl max-sm:p-2 text-center">
        Lo que recibes con tu cachorro
      </h2>
      <div className="mt-8 grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-8 items-start max-md:gap-0">
        <div className="flex flex-col justify-center items-center w-80 max-lg:w-60">
          <Image
            src={cert}
            alt="certificado"
            width="200"
            className="rounded-xl"
          />
          <p className="text-center font-semibold p-5">Pureza certificada</p>
        </div>
        <div className="flex flex-col justify-center items-center w-80 max-lg:w-60">
          <Image
            src={recomendations}
            alt="recomendaciones"
            width="200"
            className="rounded-xl"
          />
          <p className="text-center font-semibold p-5">
            Asesoría y recomendaciones de cuidado
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-80 max-lg:w-60">
          <Image
            src={kit}
            alt="certificado"
            width="200"
            className="rounded-xl"
          />
          <p className="text-center font-semibold p-5">Kit de cuidado</p>
        </div>
      </div>
    </div>
  );
};

export default Extras;
