"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import stars from "../../public/estrella.png";
import Entregas from "./Entregas";
const items = [
  {
    review:
      "El servicio fue increible, me encantó la asesoría que me dieron y lo rápido que pude conseguir mi cachorro.",
    reviewer: "Juan Martinez",
  },
  {
    review:
      "Es el primer cachorro que compro, me dieron recomendaciones para cuidarlo y estoy muy agradecido por ese detalle.",
    reviewer: "Daniel Zapata",
  },
  {
    review:
      "Se encargaron de hacer la entrega del perro ellos mismos, fueron muy profesionales y a la vez se les nota el amor que tienen por los animales.",
    reviewer: "Lina Alvarez",
  },
  {
    review:
      "Queria el cachorro para un regalo y me cotizaron también un detalle y unos globos, al momento de la entrega mi hija quedó encantada.",
    reviewer: "Juan Camilo Castellanos",
  },
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
      <h2 className="flex text-black text-5xl font-bold p-5 mt-5 max-sm:text-3xl">
        Testimonios
      </h2>
      <Entregas />
      <div className="flex flex-col transition-opacity duration-500 w-[70%] max-sm:w-[90%]">
        <span className="text-2xl text-black text-center max-sm:text-lg">
          "{items[currentIndex].review}"
        </span>
        <div className="flex justify-center items-center max-sm:-mt-8 max-sm:-mb-8">
          <Image src={stars} width="100" alt="stars" />
        </div>
        <span className="text-xl text-black text-center font-semibold max-sm:text-base">
          {items[currentIndex].reviewer}
        </span>
      </div>
    </div>
  );
};

export default Reviews;
