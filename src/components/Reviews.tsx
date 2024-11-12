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
  {
    review:
      "Se encargaron de hacer la entrega del perro ellos mismos, fueron muy profesionales y a la vez se les nota el amor que tienen por los animales.",
    reviewer: "Lina Marcela",
  },
  {
    review:
      "Queria el cachorro para un regalo y me cotizaron también un detalle y unos globos, al momento de la entrega mi hija quedó encantada.",
    reviewer: "Jose Jasinto",
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
    <div
      id="about"
      className="flex flex-col justify-center items-center scroll-mt-20 max-sm:scroll-mt-0"
    >
      <h2 className="flex text-black text-5xl font-bold p-5 mt-5">
        Testimonios
      </h2>
      <div className="flex flex-col transition-opacity duration-500 w-[70%]">
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
