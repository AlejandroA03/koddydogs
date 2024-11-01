"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import stars from "../../public/estrella.png";
const items = [
  {
    review:
      "El servicio fue increible, me encantó la asesoría que me dieron y lo rápido que pude conseguir mi cachorro.",
    reviewer: "Juan Martinez",
  },
  {
    review:
      "Es el primer cachorro que compro, me dieron recomendaciones para cuidarlo y estoy muy agradecido por ese detalle.",
    reviewer: "Pedro Perez",
  },
  { review: "texto3", reviewer: "Lina Marcela" },
  { review: "texto4", reviewer: "Jose Jasinto" },
];
const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 15000);

    return () => clearInterval(intervalId);
  }, [items.length]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="flex text-black text-5xl font-bold p-5 mt-5">
        Testimonios
      </h2>
      <div className="flex flex-col transition-opacity duration-500">
        <span className="text-2xl text-black text-center">
          "{items[currentIndex].review}"
        </span>
        <div className="flex justify-center items-center">
          <Image src={stars} width="100" alt="stars" />
        </div>
        <span className="text-xl text-black text-center font-semibold">
          {items[currentIndex].reviewer}
        </span>
      </div>
    </div>
  );
};

export default Reviews;
