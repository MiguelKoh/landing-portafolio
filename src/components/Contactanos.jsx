import Formulario from "./Formulario";
import {useTranslation} from "react-i18next"

function Contactanos() {
  const [t]= useTranslation("global");
  return (
    <div className="flex flex-wrap justify-center h-[75vh]" id="contactanos">
      <div className="w-9/12 flex flex-wrap justify-center">
        <div className="w-full bg-white pt-10 flex justify-center">
          <p className="text-3xl colorBanner font-semibold">{t("contactanos")}</p>
        </div>
        <div className="w-full bg-white flex flex-wrap justify-center pb-10">
              <Formulario />
        </div>
      </div>
    </div>
  );
}

export default Contactanos;
