import logo from "../assets/images/logo-azul-santamar_opt.png";

function Enviado() {
  return (
    <div className="flex flex-wrap justify-center items-center h-[87vh] bg-image-enviado">
      <div className="flex flex-wrap justify-center w-4/5">
        <div className="w-full flex justify-center">
          <img src={logo} alt="logo" className="w-80" />
        </div>
        <div className=" flex flex-col justify-center items-center w-6/12 text-center">
          <p className="text-5xl text-[#5DC2BA] font-semibold">Gracias por dejarnos tus datos,</p>
          <p className="text-2xl w-4/5">en la brevedad un asesor se pondra en contacto <span className="text-[#5DC2BA] font-semibold">contigo</span></p>
        </div>
      </div>
    </div>
  );
}

export default Enviado;
