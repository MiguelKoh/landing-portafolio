import logoBlanco from "../assets/images/logo_santamar-03_opt.png";
import BotonWhatsapp from './BotonWhatsapp'

function Seccion1() {
  return (
    <div className="bg-image-seccion-1 flex justify-center items-start h-screen"> 
      <div className="text-center mt-10">
        <img src={logoBlanco} className="w-48 mx-auto" alt="Logo" />
        <div className="mt-2 text-white ">
          <p className="tracking-wider xs:text-2xl md:text-4xl">LOTES</p>
          <p className="xs:text-2xl md:text-4xl tracking-wider">URBANIZADOS</p>
          <p className='xs:text-lg md:text-2xl colorBanner xs:mt-1 md:mt-2'>ÚLTIMOS LOTES DISPONIBLES</p>
        </div>
        <button 
        className='mt-5 text-white text-lg bg-color-banner font-medium py-3 px-4 cursor-text' 
        >DESDE $389,767 MXN</button>
        <p className='colorBanner text-lg mt-2 font-medium'>SISAL, YUCATÁN</p>
      </div>
      <BotonWhatsapp/>
    </div>
  );
}

export default Seccion1;
