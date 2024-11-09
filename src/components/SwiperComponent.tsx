"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import bulldog from "../../public/bulldog.jpg";
import chihuahua from "../../public/chihuahua.jpg";
import pinscher from "../../public/pinscher.jpg";
import golden from "../../public/golden.jpg";
import pomerania from "../../public/pomerania.jpg";
import teckel from "../../public/teckel.jpg";
import yorkshire from "../../public/yorkshire.jpg";

const SwiperComponent = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={3}
      spaceBetween={25}
      className="w-[70%] flex justify-center"
      navigation
      pagination={{ clickable: true }}
      loop={true}
    >
      <SwiperSlide className="flex justify-center mb-8">
        <div className="flex flex-col justify-center items-center w-[250px] mx-auto">
          <Image
            src={golden}
            alt="certificado"
            width="250"
            className="rounded-2xl border-slate-700 border-2 shadow-md shadow-black"
          />
          <p className="text-center font-semibold p-5">Golden Retriever</p>
          <p className="text-center font-normal p-5">
            Raza amigable y juguetona, perfecta para familias. Un compañero leal
            con energía para disfrutar al aire libre y en casa.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center mb-8">
        <div className="flex flex-col justify-center items-center w-[250px] mx-auto">
          <Image
            src={chihuahua}
            alt="certificado"
            width="250"
            className="rounded-2xl border-slate-700 border-2 shadow-md shadow-black"
          />
          <p className="text-center font-semibold p-5">Chihuahua</p>
          <p className="text-center font-normal p-5">
            Raza pequeña con mucha energía, ideal para hacerte compañia en tu
            casa y tambien para llevarlo a todos lados.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center mb-8">
        <div className="flex flex-col justify-center items-center w-[250px] mx-auto">
          <Image
            src={bulldog}
            alt="certificado"
            width="250"
            className="rounded-2xl border-slate-700 border-2 shadow-md shadow-black"
          />
          <p className="text-center font-semibold p-5">Bulldog Frances</p>
          <p className="text-center font-normal p-5">
            Raza compacta y cariñosa, ideal para la vida en interiores.
            Tranquilo y juguetón, es el mejor amigo que puedes tener en casa.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center mb-8">
        <div className="flex flex-col justify-center items-center w-[250px] mx-auto">
          <Image
            src={yorkshire}
            alt="certificado"
            width="250"
            className="rounded-2xl border-slate-700 border-2 shadow-md shadow-black"
          />
          <p className="text-center font-semibold p-5">Yorkshire Terrier</p>
          <p className="text-center font-normal p-5">
            Pequeño, elegante y lleno de vida. Perfecto para hacerte compañía en
            casa y disfrutar de paseos juntos por la ciudad.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center mb-8">
        <div className="flex flex-col justify-center items-center w-[250px] mx-auto">
          <Image
            src={pinscher}
            alt="certificado"
            width="250"
            className="rounded-2xl border-slate-700 border-2 shadow-md shadow-black"
          />
          <p className="text-center font-semibold p-5">Pinscher</p>
          <p className="text-center font-normal p-5">
            Pequeño pero lleno de energía, el Pinscher es un guardián atento y
            un compañero fiel, ideal para tu hogar y aventuras diarias.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center mb-8">
        <div className="flex flex-col justify-center items-center w-[250px] mx-auto">
          <Image
            src={pomerania}
            alt="certificado"
            width="250"
            className="rounded-2xl border-slate-700 border-2 shadow-md shadow-black"
          />
          <p className="text-center font-semibold p-5">Pomerania</p>
          <p className="text-center font-normal p-5">
            Raza pequeña con un carácter encantador y pelaje esponjoso. Perfecto
            para hacerte compañía en casa y para llevarlo contigo a todas
            partes.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center mb-8">
        <div className="flex flex-col justify-center items-center w-[250px] mx-auto">
          <Image
            src={teckel}
            alt="certificado"
            width="250"
            className="rounded-2xl border-slate-700 border-2 shadow-md shadow-black"
          />
          <p className="text-center font-semibold p-5">Teckel</p>
          <p className="text-center font-normal p-5">
            Pequeño y valiente, el Teckel es ideal para la vida en casa y para
            aventuras al aire libre. Su carácter curioso te encantará.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
