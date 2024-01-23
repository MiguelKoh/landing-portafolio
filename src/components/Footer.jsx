import icono from "../assets/images/icono_blanco_opt.png";

function Footer() {
  return (
    <div className="bg-btn-asesor flex flex-wrap justify-center py-3">
        <div className="flex flex-wrap w-9/12">
            <div className="xs:w-full md:w-1/12 flex justify-center items-center">
                <img src={icono} className="w-12" loading="lazy"/>
            </div>
            
            <div className="xs:w-full md:w-7/12 xs:py-3">
                <p className="xs:text-center md:text-left xs:text-sm md:text-base text-white">PRODUCTO INMOBILIARIO</p>
                <p className="xs:text-center md:text-left xs:text-sm text-white md:text-base font-semibold">DESARROLLADO POR BLACK SWAN</p>
            </div>

            <div className=" xs:w-full md:w-4/12 flex xs:justify-center md:justify-end items-center">
                <p className="xs:text-sm text-white md:text-base">POLITICA DE PRIVACIDAD</p>
            </div>

        </div>

    </div>
  )
}

export default Footer