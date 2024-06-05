import imagen from "../assets/images/foto-2_opt.jpg";
import planta from "../assets/images/Planta-1_opt.png";
import icono1 from "../assets/images/amenidades/crecimiento_economico.png";
import icono2 from "../assets/images/amenidades/club_de_playa.png";

function Invertir() {
  return (
    <div className="contenedorInvertir">
      <div className=" w-[80%] flex justify-center flex-col items-center relative">
        <h1 className="xs:text-2xl md:text-3xl font-medium text-[#5DC2BA] mt-8 text-center">
          ¿POR QUÉ INVERTIR EN SISAL, YUCATÁN?
        </h1>
        <p className="text-justify text-lg font-normal w-[80%]  my-5 leading-9">
          El crecimiento del estado de Yucatán ha sido notorio en los últimos
          años, lo cual lo convierte en una región sumamente atractiva para
          invertir. Existen diversas razones que respaldan esta afirmación y
          demuestran por qué invertir en Yucatán es una decisión acertada.
          Algunos de esos factores son la infraestructura y el potencial
          turístico de Yucatán.
          <span className="subrayado">
             La región es reconocida a nivel mundial por sus hermosas playas, su
            rica historia y su cultura única.
          </span>
        </p>
        <img src={imagen} alt="imagen" className="imagenInvertir" />
        <p className="text-justify text-lg font-normal w-[80%]  my-5 leading-9">
          <span className="subrayado">Yucatán </span> se destaca por ser un{" "}
          <span className="subrayado">
            estado seguro y con una calidad de vida envidiable.
          </span>{" "}
          Sus índices de seguridad son de los más altos en comparación con otros
          estados de México, lo que brinda tranquilidad a los inversionistas y
          sus familias. Sisal es una localidad ubicada frente al mar de la costa
          yucateca que en los últimos años ha tomado notoriedad debido a ser
          distinguido como{" "}
          <span className="subrayado">Pueblo Mágico y Playa Platino</span>, lo
          cual lo hace ideal para invertir. Esta localidad ofrece diversas
          razones para invertir en ella.
        </p>
        <div className="flex justify-center w-full flex-wrap  contenedorImagenesInvertir">
          <div className=" w-[80%] flex flex-wrap text-base">
            
            <div className="py-4 xs:w-full md:w-[50%]  flex flex-wrap flex-row justify-center items-center">
              <div className="xs:w-full md:w-[20%] flex justify-center">
                <img src={icono1} alt="imagen1" />
              </div>
              <div className="xs:w-full  md:w-[80%]">
                <p className="xs:text-center md:text-start">
                  Cuenta con un crecimiento económico sostenido.
                </p>
              </div>
            </div>

            <div className=" py-4 xs:w-full md:w-[50%]  flex flex-wrap flex-row justify-center items-center">
              <div className="xs:w-full md:w-[20%] flex justify-center">
                <img src={icono2} alt="imagen1" />
              </div>
              <div className="xs:w-full md:w-[80%] flex justify-center">
                <p className="xs:text-center md:text-justify">
                  Potencial turístico: la localidad se encuentra en una zona
                  costera de gran belleza y atractivo natural.
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
