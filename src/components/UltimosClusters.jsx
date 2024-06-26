import React from "react";
import ultimos from "../assets/images/plan-santamar_opt.png";
import logo from "../assets/images/logo-azul-santamar_opt.png";
import planta1 from "../assets/images/Planta-1_opt.png";
import planta2 from "../assets/images/Planta-2_opt.png";
import Cotizador from "./Cotizador";
import {useTranslation} from "react-i18next"

function UltimosClusters() {
  const [t]= useTranslation("global");
  return (
    <div className="contenedorUltimosClusters">
      <div className="w-full md:w-2/3 flex flex-wrap justify-center items-center py-10">
        <img src={planta1} className="planta1" alt="Planta 1" loading="lazy" />
        
        <div className="w-full md:w-6/12 flex justify-center md:justify-end items-center">
          <img src={ultimos} className="mapa z-10" alt="mapa" loading="lazy" />
        </div>
        
        <div className="w-full md:w-6/12 flex justify-center md:justify-start items-center contenedorCirculo">
          <div className="circulo_ultimosClusters">
            <div className="flex flex-col justify-center items-center">
              <img src={logo} className="w-40 mt-12" alt="logo" loading="lazy"/>
              <p className="text-center mt-2 text-2xl font-semibold text-[#5DC2BA]">
                {t("ultimosClusters.titulo")}
              </p>
              <div className="flex flex-col md:flex-row mt-2 w-10/12 textos">
                <div className="md:w-6/12 pr-4 borde">
                  <p className="text-center md:text-end">
                  {t("ultimosClusters.col1.span1")} <span className="estiloLetra2">{t("ultimosClusters.col1.span2")}</span> {t("ultimosClusters.col1.span3")}
                  </p>
                </div>
                <div className="md:w-6/12 mt-2 md:mt-0 md:ml-3">
                  <p className="text-center md:text-start">
                  {t("ultimosClusters.col2.span1")} <span className="estiloLetra">$6,496 MXN</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <img src={planta2} className="planta2" alt="Planta 2" loading="lazy" />
      </div>
      <Cotizador/>
    </div>
  );
}

export default UltimosClusters;
