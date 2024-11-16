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
      <div
        id="contact"
        className="flex flex-col justify-center items-center text-black max-sm:scroll-mt-10"
      >
        <h2 className="flex text-5xl font-bold p-5 mt-5 max-sm:text-3xl max-sm:p-0">
          Contacto
        </h2>
        <div className="mt-8 grid grid-cols-3 max-md:grid-cols-1 max-sm:grid-cols-1 max-lg:grid-cols-1 gap-8 justify-stretch w-[70%]">
          <div className="flex flex-col items-center justify-center">
            <Image src={logo} width="250" alt="logo" className="rounded-full" />
            <div className="flex w-fit px-1.25 py-1.25 shadow-box-up rounded-2xl dark:bg-box-dark dark:shadow-box-dark-out">
              <div className="dark:shadow-buttons-box-dark rounded-2xl w-full px-1.5 py-1.5 md:px-3 md:py-3">
                <button className="hover:text-black text-blue-600 border-2 inline-flex items-center mr-4 last-of-type:mr-0 p-2.5 border-transparent bg-light-secondary shadow-button-flat-nopressed hover:border-2 hover:shadow-button-flat-pressed focus:opacity-100 focus:outline-none active:border-2 active:shadow-button-flat-pressed font-medium rounded-full text-sm text-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <button className="hover:text-black text-rose-600 border-2 inline-flex items-center mr-4 last-of-type:mr-0 p-2.5 border-transparent bg-light-secondary shadow-button-flat-nopressed hover:border-2 hover:shadow-button-flat-pressed focus:opacity-100 focus:outline-none active:border-2 active:shadow-button-flat-pressed font-medium rounded-full text-sm text-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    viewBox="0 0 21 21"
                    fill="currentColor"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>

                <button className="hover:text-black text-green-700 border-2 inline-flex items-center mr-4 last-of-type:mr-0 p-2.5 border-transparent bg-light-secondary shadow-button-flat-nopressed hover:border-2 hover:shadow-button-flat-pressed focus:opacity-100 focus:outline-none active:border-2 active:shadow-button-flat-pressed font-medium rounded-full text-sm text-center ">
                  <a href="https://wa.me/message/ZGDCDXWPIL6JA1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                      viewBox="0 0 22 22"
                      fill="currentColor"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                        clip-rule="evenodd"
                      />
                      <path
                        fill="currentColor"
                        d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                      />
                    </svg>
                  </a>
                </button>
              </div>
            </div>
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
              className="text-black h-[40px] w-[256px] bg-gray-100 rounded-[15px] px-2 outline-0 m-[10px] border-gray-500 border-2"
              type="text"
              name="user_name"
              placeholder="Nombre"
              required
            />
            <input
              className="text-black h-[40px] w-[256px] bg-gray-100 rounded-[15px] px-2 outline-0 m-[10px] border-gray-500 border-2"
              type="email"
              name="user_email"
              placeholder="Correo electrónico"
              required
            />
            <textarea
              name="message"
              id=""
              className="text-black w-[256px] bg-gray-100 rounded-[15px] px-2 outline-0 m-[10px] h-[150px] p-[5px] resize-none border-gray-500 border-2"
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
