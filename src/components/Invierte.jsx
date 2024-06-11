import logoBlanco from "../assets/images/logo_santamar-03_opt.png";
import { HashLink } from 'react-router-hash-link';
import {useTranslation} from "react-i18next"

function Invierte() {
  const [t]= useTranslation("global");
  return (
    <div className="bg-image-invierte xs:h-96 md:h-screen">
      <div className="flex flex-wrap justify-center pt-10">
        <img src={logoBlanco} className=" xs:w-40 md:w-56 mx-auto" alt="Logo" loading="lazy"/>
      </div>
      <div className="flex flex-wrap justify-center bg-black/45 py-10 mt-3">
        <div className="w-full flex justify-center">
        <p className="sm:w-1/3 md:w-1/2 xs:text-xl md:text-3xl font-semibold text-white text-center">
          <span className="color-titulos">{t("invierte.span1")}</span> {t("invierte.span2")} <span className="color-titulos">{t("invierte.span3")}</span> {t("invierte.span4")}
        </p>
        </div>
        <div className="w-full flex justify-center mt-5">
        <HashLink smooth to="#contactanos" className="bg-btn-asesor rounded xs:py-2 xs:px-3 md:py-3 md:px-4 text-white xs:text-sm md:text-lg hover:opacity-95">{t("invierte.btnContactar")}</HashLink>
        </div>
      </div>
      
    </div>
  );
}

export default Invierte