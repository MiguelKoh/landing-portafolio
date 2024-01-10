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
function Amenidades() {
  return (
    <div className="bg-amenidades pt-10">
      <div className='flex flex-wrap justify-center mb-12'>
      <h3 className="text-3xl">AMENIDADES</h3>
      </div>
    <div className='w-full flex justify-center'>
      <div className="containerAmenidades w-5/6 grid xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5 items-center">
          <div><img src={playa}/> <p>Club de playa</p></div>
          <div><img src={cine}/><p>Cine al aire libre</p></div>
          <div><img src={corredor}/><p>Corredor cultural</p></div>
          <div><img src={asadores}/><p>Área de asaderos</p></div>
          <div><img src={fogata}/><p>Fogata</p></div>
          <div><img src={yoga}/><p>Área de yoga y pilates</p></div>
          <div><img src={pet}/><p>Parque pet friendly</p></div>
          <div><img src={gym}/><p>Gimnasio al aire libre</p></div>
          <div><img src={temazal} /><p>Temazcal</p></div>
          <div><img src={picnicDia} /><p>Picnic de día</p></div>
          <div><img src={areaDeJuegos} /><p>Juegos infantiles</p></div>
          <div><img src={picnicNoche} /><p>Picnic de noche</p></div>
          <div><img src={pista} /><p>Pista multifuncional</p></div>
          <div><img src={crecimiento} /><p>Crecimiento economico</p></div>
      </div>
    </div>
    </div>
  );
}

export default Amenidades