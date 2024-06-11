import icono from '../assets/images/black-swan/icono_black-swan_opt.png'
import uno from '../assets/images/black-swan/1_opt.png'
import dos from '../assets/images/black-swan/2_opt.png'
import tres from '../assets/images/black-swan/3_opt.png'
import cuatro from '../assets/images/black-swan/4_opt.png'
import cinco from '../assets/images/black-swan/5_opt.png'
import seis from '../assets/images/black-swan/6_opt.png'
import siete from '../assets/images/black-swan/7_opt.png'
import {useTranslation} from "react-i18next"

function Productos() {
const [t]= useTranslation("global");
  return (
    <div className="bg-productos py-5">
        <div className="flex flex-wrap justify-center">
            <div className="flex flex-wrap xs:justify-center md:justify-start w-9/12">
                <div className="md:w-1/12 flex justify-center">
                    <img src={icono} className='w-12 xs:pb-2' loading="lazy"/>
                </div>
                <div className="md:w-9/1 flex justify-start items-center mb-2" >
                <p className=' xs:text-lg md:text-xl font-semibold xs:text-center'>{t("productos.titulo")} <span className='font-bold'>BLACK SWAN®</span></p>
                </div>
            </div>

        </div>
        <div className='flex justify-center'>
        <div className='containerProducto w-9/12 grid xs:grid-cols-2 xs:gap-y-6 md:grid-cols-3 lg:grid-cols-7 gap-0 justify-center 
         justify-items-center items-center py-2'>
            <img src={uno} alt="icono" loading="lazy"/>
            <img src={dos} alt="icono" loading="lazy" />
            <img src={tres} alt="icono" loading="lazy" />
            <img src={cuatro} alt="icono" loading="lazy" />
            <img src={cinco} alt="icono" loading="lazy" />
            <img src={seis} alt="icono" loading="lazy"/>
            <img src={siete} alt="icono" loading="lazy" className='xs:col-span-2 md:col-span-3 lg:col-span-1'/>
        </div>
        </div>
    </div>
  )
}

export default Productos