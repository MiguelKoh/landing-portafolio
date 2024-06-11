import imagen from "../assets/images/foto-2_opt.jpg";
import planta from "../assets/images/Planta-1_opt.png";
import icono1 from "../assets/images/amenidades/crecimiento_economico.png";
import icono2 from "../assets/images/amenidades/club_de_playa.png";
import {useTranslation} from "react-i18next"

function Invertir() {
  const [t]= useTranslation("global");
  return (
    <div className="contenedorInvertir">
      <div className=" w-[80%] flex justify-center flex-col items-center relative">
        <h1 className="xs:text-2xl md:text-3xl font-medium text-[#5DC2BA] mt-8 text-center">
        {t("segundaSeccion.porqueInvertir")}
        </h1>
        <p className="text-justify text-lg font-normal w-[80%]  my-5 leading-9">
        {t("segundaSeccion.primerParrafo.principal")}
          <span className="subrayado">
          {t("segundaSeccion.primerParrafo.span1")}
          </span>
        </p>
        <img src={imagen} alt="imagen" className="imagenInvertir" />
        <p className="text-justify text-lg font-normal w-[80%]  my-5 leading-9">
          <span className="subrayado">Yucatán </span>{t("segundaSeccion.segundoParrafo.span2")}
          <span className="subrayado">
          {t("segundaSeccion.segundoParrafo.span3")}
          </span>
          {t("segundaSeccion.segundoParrafo.principal")}
          <span className="subrayado">{t("segundaSeccion.segundoParrafo.span4")}</span>
          {t("segundaSeccion.segundoParrafo.span5")}
        </p>
        <div className="flex justify-center w-full flex-wrap  contenedorImagenesInvertir">
          <div className=" w-[80%] flex flex-wrap text-base">
            
            <div className="py-4 xs:w-full md:w-[50%]  flex flex-wrap flex-row justify-center items-center">
              <div className="xs:w-full md:w-[20%] flex justify-center">
                <img src={icono1} alt="imagen1" />
              </div>
              <div className="xs:w-full  md:w-[80%]">
                <p className="xs:text-center md:text-start">
                {t("segundaSeccion.icono1")}
                </p>
              </div>
            </div>

            <div className=" py-4 xs:w-full md:w-[50%]  flex flex-wrap flex-row justify-center items-center">
              <div className="xs:w-full md:w-[20%] flex justify-center">
                <img src={icono2} alt="imagen1" />
              </div>
              <div className="xs:w-full md:w-[80%] flex justify-center">
                <p className="xs:text-center md:text-justify">
                {t("segundaSeccion.icono2")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src={planta}
          className="absolute md:w-[12rem] lg:w-56  lg:bottom-[16rem] lg:left-[-9rem] xs:hidden md:block" />
      </div>
    </div>
  );
}

export default Invertir;
