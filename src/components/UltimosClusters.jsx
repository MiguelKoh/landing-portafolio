import React from "react";
import ultimos from "../assets/images/plan-santamar_opt.png";
import logo from "../assets/images/logo-azul-santamar_opt.png";
import planta1 from "../assets/images/Planta-1_opt.png";
import planta2 from "../assets/images/Planta-2_opt.png";
import Cotizador from "./Cotizador";

function UltimosClusters() {
  return (
    <div className="contenedorUltimosClusters">
      <div className="w-full md:w-2/3 flex flex-wrap justify-center items-center py-10">
        <img src={planta1} className="planta1" alt="Planta 1" />
        
        <div className="w-full md:w-6/12 flex justify-center md:justify-end items-center">
          <img src={ultimos} className="mapa z-10" alt="Mapa" />
        </div>
        
        <div className="w-full md:w-6/12 flex justify-center md:justify-start items-center contenedorCirculo">
          <div className="circulo_ultimosClusters">
            <div className="flex flex-col justify-center items-center">
              <img src={logo} className="w-40 mt-12" alt="Logo" />
              <p className="text-center mt-2 text-2xl font-semibold text-[#5DC2BA]">
                ÚLTIMOS CLUSTERS DISPONIBLES
              </p>
              <div className="flex flex-col md:flex-row mt-2 w-10/12 textos">
                <div className="md:w-6/12 pr-3">
                  <p className="text-center md:text-end">
                    Elige tu terreno hasta <span className="estiloLetra2">48 meses</span> sin intereses
                  </p>
                </div>
                <div className="md:w-6/12 mt-2 md:mt-0 md:ml-3">
                  <p className="text-center md:text-start">
                    Mensualidades desde <span className="estiloLetra">$6,496 MXN</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <img src={planta2} className="planta2" alt="Planta 2" />
      </div>
      <Cotizador/>
    </div>
  );
}

export default UltimosClusters;
