import areaDeJuegos from '../assets/images/amenidades/area_de_juegos.png'
import asadores from '../assets/images/amenidades/asadores.png'
import playa from '../assets/images/amenidades/club_de_playa.png'
import corredor from '../assets/images/amenidades/corredor_cultural.png'
import crecimiento from '../assets/images/amenidades/crecimiento_economico.png'
import fogata from '../assets/images/amenidades/fogata.png'
import gym from '../assets/images/amenidades/gym.png'
import pet from '../assets/images/amenidades/pet_friendly.png'
import picnicDia from '../assets/images/amenidades/picnic_de_dia.png'
import picnicNoche from '../assets/images/amenidades/picnic_de_noche.png'
import pista from '../assets/images/amenidades/pista.png'
import temazal from '../assets/images/amenidades/temazcal.png'
import yoga from '../assets/images/amenidades/yoga.png'
import cine from '../assets/images/amenidades/cine.png'
import {useTranslation} from "react-i18next"

function Amenidades() {
  const [t]= useTranslation("global");
  
  return (
    <div className="bg-amenidades py-10">
      <div className='flex flex-wrap justify-center mb-12'>
      <h3 className="xs:text-2xl md:text-4xl">{t("amenidades.titulo")}</h3>
      </div>
    <div className='w-full flex justify-center'>
      <div className="containerAmenidades w-5/6 grid xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5 items-center">
          <div><img src={playa}/> <p>{t("amenidades.clubDeplaya")}</p></div>
          <div><img src={cine}/><p>{t("amenidades.cineAlAireLibre")}</p></div>
          <div><img src={corredor}/><p>{t("amenidades.corredorCultural")}</p></div>
          <div><img src={asadores}/><p>{t("amenidades.areaDeAsaderos")}</p></div>
          <div><img src={fogata}/><p>{t("amenidades.fogata")}</p></div>
          <div><img src={yoga}/><p>{t("amenidades.areaYoga")}</p></div>
          <div><img src={pet}/><p>{t("amenidades.parquePet")}</p></div>
          <div><img src={gym}/><p>{t("amenidades.gym")}</p></div>
          <div><img src={temazal} /><p>{t("amenidades.temazcal")}</p></div>
          <div><img src={picnicDia} /><p>{t("amenidades.picnicDia")}</p></div>
          <div><img src={areaDeJuegos} /><p>{t("amenidades.picnicNoche")}</p></div>
          <div><img src={picnicNoche} /><p>{t("amenidades.juegosInfantiles")}</p></div>
          <div><img src={pista} /><p>{t("amenidades.pista")}</p></div>
          <div><img src={crecimiento} /><p>{t("amenidades.crecimientoEconomico")}</p></div>
      </div>
    </div>
    </div>
  );
}

export default Amenidades