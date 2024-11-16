"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import entrega1 from "../../public/entrega1.jpeg";
import entrega2 from "../../public/entrega2.jpeg";
import entrega3 from "../../public/entrega3.jpeg";
import entrega4 from "../../public/entrega4.jpeg";

const Entregas = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={25}
      slidesPerView={1}
      className="w-[70%] flex justify-center max-sm:w-[90%]"
      navigation
      pagination={{ clickable: true }}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      <SwiperSlide className="flex justify-center mb-8">
        <div className="flex flex-col justify-center items-center w-[250px] mx-auto max-sm:w-[200px]">
          <Image
            src={entrega1}
            alt="certificado"
            width="250"
            className="rounded-2xl border-slate-700 border-2 shadow-md shadow-black"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center mb-8">
        <div className="flex flex-col justify-center items-center w-[250px] mx-auto max-sm:w-[200px]">
          <Image
            src={entrega2}
            alt="certificado"
            width="250"
            className="rounded-2xl border-slate-700 border-2 shadow-md shadow-black"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center mb-8">
        <div className="flex flex-col justify-center items-center w-[250px] mx-auto max-sm:w-[200px]">
          <Image
            src={entrega3}
            alt="certificado"
            width="250"
            className="rounded-2xl border-slate-700 border-2 shadow-md shadow-black"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="flex justify-center mb-8">
        <div className="flex flex-col justify-center items-center w-[250px] mx-auto max-sm:w-[200px]">
          <Image
            src={entrega4}
            alt="certificado"
            width="250"
            className="rounded-2xl border-slate-700 border-2 shadow-md shadow-black"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Entregas;
