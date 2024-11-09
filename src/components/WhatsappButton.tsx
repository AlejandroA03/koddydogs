import wpplogo from "../../public/whatsapp.png";
import Image from "next/image";
const WhatsappButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/message/ZGDCDXWPIL6JA1`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 text-white font-bold rounded-lg p-2 flex flex-row w-fit self-center "
    >
      <Image src={wpplogo} width="25" alt="logo" className="m-1" />
      <span className="flex items-center ml-2">¡Asesoría inmediata!</span>
    </a>
  );
};

export default WhatsappButton;
