import Image from "next/image";
import cert from "../../public/certificado.jpg";

const Extras = () => {
  return (
    <div className="text-black">
      <h2>Lo que recibes con tu cachorro</h2>
      <div>
        <Image src={cert} alt="certificado" width="100" />
        <p>Pureza certificada.</p>
      </div>
    </div>
  );
};

export default Extras;
