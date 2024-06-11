import logo from "../assets/images/logo-azul-santamar_opt.png";
import planta from "../assets/images/Planta-1_inclinada_opt.png"
import Footer from "../components/Footer";
import {useTranslation} from "react-i18next"

function Enviado() {
  const [t]= useTranslation("global");
  return (
    <>
    <div className="flex flex-wrap justify-center xs:items-start xs:mt-12 md:mt-0 md:items-center h-[87vh] bg-image-enviado relative">
      <div className="flex flex-wrap justify-center xs:w-full md:w-4/5">
        <div className="w-full flex justify-center">
          <img src={logo} alt="logo" className="xs:w-52 md:w-80" />
        </div>
        <div className=" flex flex-col justify-center items-center xs:w-full md:w-6/12 text-center">
          <p className="xs:text-2xl md:text-5xl text-[#5DC2BA] font-semibold">{t("enviado.p1")}</p>
          <p className="xs:text-lg md:text-3xl mt-1 w-[90%]">{t("enviado.p2")} <span className="text-[#5DC2BA] font-semibold">{t("enviado.p3")}</span></p>
        </div>
      </div>
      <img src={planta} alt="planta" className="xs:block md:hidden absolute top-[17rem] z-10"/>
    </div>
    <Footer/>
    </>
  );
}

export default Enviado;
