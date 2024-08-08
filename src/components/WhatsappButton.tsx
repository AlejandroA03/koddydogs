const WhatsappButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/+573127077098`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <span className="text-green-500 hover:text-green-700 font-bold">
        Chatea con nosotros en WhatsApp
      </span>
    </a>
  );
};

export default WhatsappButton;
