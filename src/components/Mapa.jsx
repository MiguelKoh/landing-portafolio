import mapa from '../assets/images/mapa_opt.png'

function Mapa() {
  return (
    <div className='xs:mt-0 md:mt-48'>
      <img src={mapa} className="max-w-full h-auto imagenMapa" loading="lazy"/>
    </div>
  );
}

export default Mapa