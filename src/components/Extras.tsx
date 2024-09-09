import Image from "next/image";
import cert from "../../public/certificado.jpg";

const Extras = () => {
  return (
    <div className="flex flex-col justify-center items-center text-black">
      <h2 className="flex text-4xl font-bold p-5 mt-5">
        Lo que recibes con tu cachorro
      </h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <Image src={cert} alt="certificado" width="100" />
          <p>Pureza certificada</p>
        </div>
        <div>
          <Image src={cert} alt="certificado" width="100" />
          <p>Asesoría y recomendaciones de cuidado</p>
        </div>
        <div>
          <Image src={cert} alt="certificado" width="100" />
          <p>Kit de cuidado.</p>
        </div>
      </div>
    </div>
  );
};

export default Extras;
