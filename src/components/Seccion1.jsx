import logoBlanco from "../assets/images/logo_santamar-03_opt.png";

function Seccion1() {
  return (
    <div className="bg-image bg-image-movil flex justify-center items-start h-screen"> {/* Asegúrate de que el contenedor ocupa toda la altura de la pantalla */}
      <div className="text-center mt-10"> {/* Contenedor centrado para la imagen y el texto */}
        <img src={logoBlanco} className="w-48 mx-auto" alt="Logo" /> {/* Imagen centrada */}
        <div className="mt-2 text-white ">
          <p className="tracking-wider xs:text-2xl md:text-4xl">LOTES</p>
          <p className="xs:text-2xl md:text-4xl tracking-wider">URBANIZADOS</p>
          <p className='text-2xl colorBanner'>ÚLTIMOS LOTES DISPONIBLES</p>
        </div>
        <button 
        className='mt-5 text-white text-lg bg-color-banner font-medium py-3 px-4 cursor-text' 
        >DESDE $389,767 MXN</button>
        <p className='colorBanner text-lg mt-2 font-medium'>SISAL, YUCATÁN</p>
      </div>
    </div>
  );
}

export default Seccion1;
