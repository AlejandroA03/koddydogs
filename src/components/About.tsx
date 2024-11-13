const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col justify-center items-center scroll-mt-20"
    >
      <h2 className="flex text-black text-5xl font-bold p-5 mt-5 max-sm:text-3xl">
        Nosotros
      </h2>
      <div className="flex flex-row w-[70%] items-center max-sm:flex-col max-sm:w-[90%]">
        <span className="text-2xl text-black text-center px-32 max-sm:text-lg max-sm:px-1">
          Somos una familia apasionada por las mascotas, enfocados en la buena
          crianza desde el amor y respeto hacia estos maravillosos seres de
          cuatro patas que nos llenan de felicidad y complementan nuestras
          vidas. Te queremos invitar a que vivas la experiencia de tener un
          amigo incondicional que llene de amor y felicidad tu hogar.{" "}
        </span>
        <video
          className="w-64 rounded-lg mt-5 ml-20 border-4 border-cyan-500 max-sm:ml-0"
          controls
          autoPlay
          loop
          muted
        >
          <source src="recomendacion.mp4" type="video/mp4" />
          Tu navegador no soporta la reproducción de videos.
        </video>
      </div>
    </div>
  );
};

export default About;
