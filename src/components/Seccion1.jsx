import logoBlanco from "../assets/images/logo_santamar-03_opt.png";
import BotonWhatsapp from './BotonWhatsapp'
import { useState, useEffect } from "react";
import {useTranslation} from "react-i18next"

function Seccion1() {
  
  const [t,i18n]= useTranslation("global");


  const [clase1, setClase1] = useState(false)
  const [clase2, setClase2] = useState(true) 

  const activarClase = ()=> {
     setClase1(!clase1)
     setClase2(!clase2)
     
     if (clase1) {
      i18n.changeLanguage("es")
     } 
     else if(clase2){
      i18n.changeLanguage("en")
     }
     
   }

   

    // const [isEnglish, setIsEnglish] = useState(true); // Estado inicial en inglés
  
    // const toggleLanguage = () => {
    //   setIsEnglish(!isEnglish); // Alterna el idioma
    // };
 
  
  return (
    <div className="bg-image-seccion-1 flex justify-center items-start h-screen relative">
      <div className="aviso">{t("aviso")}</div>
      <div className="btnIdioma">
        <p onClick={()=>{activarClase()}} className={clase1 ? "text-glow":""}>EN</p>
        <p>|</p>
        <p onClick={()=>{activarClase()}} className={clase2 ? "text-glow":""}>ES</p>
      </div>

      {/* <div className="btnIdioma">
        <p onClick={toggleLanguage} className={isEnglish ? "text-glow" : ""}>EN</p>
        <p>|</p>
        <p onClick={toggleLanguage} className={!isEnglish ? "text-glow" : ""}>ES</p>
      </div> */}

      <div className="text-center xs:mt-24 md:mt-10">
        <img src={logoBlanco} className="w-48 mx-auto" alt="Logo" />
        <div className="mt-2 text-white ">
          <p className="tracking-wider xs:text-2xl md:text-4xl">{t("primeraSeccion.lotes")}</p>
          <p className="xs:text-2xl md:text-4xl tracking-wider">{t("primeraSeccion.urbanizados")}</p>
          <p className='xs:text-lg md:text-2xl colorBanner xs:mt-1 md:mt-2'>{t("primeraSeccion.ultimosLotes")}</p>
        </div>
        <button 
        className='mt-5 text-white text-lg bg-color-banner font-medium py-3 px-4 cursor-text' 
        >{t("primeraSeccion.desde")} $389,767 MXN</button>
        <p className='colorBanner text-lg mt-2 font-medium'>SISAL, YUCATÁN</p>
      </div>
      <BotonWhatsapp/>
    </div>
  );
}

export default Seccion1;
