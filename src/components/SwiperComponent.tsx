"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import cert from "../../public/certificado.jpg";

const SwiperComponent = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={3}
      spaceBetween={25}
      className="w-[80%] flex justify-center"
      navigation
      pagination={{ clickable: true }}
      loop={true}
    >
      <SwiperSlide className="flex justify-center">
        <div className="flex flex-col justify-center items-center w-[250px] mx-auto">
          <Image
            src={cert}
            alt="certificado"
            width="250"
            className="rounded-lg"
          />
          <p className="text-center font-semibold p-5">Pureza certificada</p>
          <p className="text-center font-normal p-5">
            Aqui ira la descripcion larga sobre los aspectos positivos del perro
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center">
        <div className="flex flex-col justify-center items-center w-[250px] mx-auto">
          <Image
            src={cert}
            alt="certificado"
            width="250"
            className="rounded-lg"
          />
          <p className="text-center font-semibold p-5">Pureza certificada</p>
          <p className="text-center font-normal p-5">
            Aqui ira la descripcion larga sobre los aspectos positivos del perro
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center">
        <div className="flex flex-col justify-center items-center w-[250px] mx-auto">
          <Image
            src={cert}
            alt="certificado"
            width="250"
            className="rounded-lg"
          />
          <p className="text-center font-semibold p-5">Pureza certificada</p>
          <p className="text-center font-normal p-5">
            Aqui ira la descripcion larga sobre los aspectos positivos del perro
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center">
        <div className="flex flex-col justify-center items-center w-[250px] mx-auto">
          <Image
            src={cert}
            alt="certificado"
            width="250"
            className="rounded-lg"
          />
          <p className="text-center font-semibold p-5">Pureza certificada</p>
          <p className="text-center font-normal p-5">
            Aqui ira la descripcion larga sobre los aspectos positivos del perro
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center">
        <div className="flex flex-col justify-center items-center w-[250px] mx-auto">
          <Image
            src={cert}
            alt="certificado"
            width="250"
            className="rounded-lg"
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
