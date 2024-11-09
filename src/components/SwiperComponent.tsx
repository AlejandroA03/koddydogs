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
          <p className="text-center font-semibold p-5">Pureza certificada</p>
          <p className="text-center font-normal p-5">
            Aqui ira la descripcion larga sobre los aspectos positivos del perro
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
          <p className="text-center font-semibold p-5">Pureza certificada</p>
          <p className="text-center font-normal p-5">
            Aqui ira la descripcion larga sobre los aspectos positivos del perro
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
          <p className="text-center font-semibold p-5">Pureza certificada</p>
          <p className="text-center font-normal p-5">
            Aqui ira la descripcion larga sobre los aspectos positivos del perro
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
          <p className="text-center font-semibold p-5">Pureza certificada</p>
          <p className="text-center font-normal p-5">
            Aqui ira la descripcion larga sobre los aspectos positivos del perro
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
          <p className="text-center font-semibold p-5">Pureza certificada</p>
          <p className="text-center font-normal p-5">
            Aqui ira la descripcion larga sobre los aspectos positivos del perro
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
          <p className="text-center font-semibold p-5">Pureza certificada</p>
          <p className="text-center font-normal p-5">
            Aqui ira la descripcion larga sobre los aspectos positivos del perro
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
          <p className="text-center font-semibold p-5">Pureza certificada</p>
          <p className="text-center font-normal p-5">
            Aqui ira la descripcion larga sobre los aspectos positivos del perro
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
