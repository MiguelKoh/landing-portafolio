import logoBlanco from "../assets/images/logo_santamar-03_opt.png";

function Invierte() {
  return (
    <div className="bg-image-invierte xs:h-96 md:h-screen">
      <div className="flex flex-wrap justify-center pt-10">
        <img src={logoBlanco} className=" xs:w-40 md:w-56 mx-auto" alt="Logo" loading="lazy"/>
      </div>
      <div className="flex flex-wrap justify-center bg-black/45 py-10 mt-3">
        <div className="w-full flex justify-center">
        <p className="sm:w-1/3 md:w-1/2 xs:text-xl md:text-3xl font-semibold text-white text-center">
          <span className="color-titulos">Invierte</span> desde $389,767 pesos
          en hasta <span className="color-titulos">48 meses</span> sin intereses
        </p>
        </div>
        <div className="w-full flex justify-center mt-5">
        <button className="bg-btn-asesor xs:py-2 xs:px-3 md:py-3 md:px-4 text-white xs:text-sm md:text-lg">Contactar a un asesor</button>
        </div>
      </div>
      
    </div>
  );
}

export default Invierte