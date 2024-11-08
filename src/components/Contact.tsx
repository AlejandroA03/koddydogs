"use client";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef } from "react";
import Swal from "sweetalert2";
import Image from "next/image";
import logo from "../../public/logo.jpg";

const Contact: React.FC = (): React.ReactElement => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!formRef.current) return;

    const serviceId = "service_ejnpkk5";
    const templateId = "template_so3q6vj";
    const apiKey = "HxnxM-M4Bntl1NZvF";

    emailjs
      .sendForm(serviceId, templateId, formRef.current, apiKey)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "¡Mensaje enviado!",
          showConfirmButton: false,
          timer: 1500,
        });
        formRef.current?.reset();
      })
      .catch((error) =>
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 1500,
        }),
      );
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center text-black">
        <h2 className="flex text-5xl font-bold p-5 mt-5">Contacto</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-stretch w-[70%]">
          <div>
            <Image
              src={logo}
              width="250"
              alt="logo"
              className="rounded-full ml-14"
            />
          </div>
          <div className="text-center">
            <p>
              Siguenos en nuestras redes sociales, tambien puedes dar click a
              los botones de whatsapp para ponerte en contacto con nosotros o
              llena el siguiente formulario para enviarnos un correo.
            </p>
          </div>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center"
          >
            <input
              className="text-black h-[40px] w-[256px] bg-gray-300 rounded-[15px] px-2 outline-0 m-[10px]"
              type="text"
              name="name"
              placeholder="Nombre"
              required
            />
            <input
              className="text-black h-[40px] w-[256px] bg-gray-300 rounded-[15px] px-2 outline-0 m-[10px]"
              type="email"
              name="user_email"
              placeholder="Correo electrónico"
              required
            />
            <textarea
              name="message"
              id=""
              className="text-black w-[256px] bg-gray-300 rounded-[15px] px-2 outline-0 m-[10px] h-[150px] p-[5px] resize-none"
              placeholder="Escribe aquí tu mensaje"
            ></textarea>
            <button
              type="submit"
              className="bg-green-500 h-[37px] w-[200px] rounded-[15px] text-base p-1 mt-[20px]"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
