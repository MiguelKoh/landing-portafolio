import mapa from '../assets/images/mapa_opt.png'

function Mapa() {
  return (
    <div>
      <img src={mapa} className="max-w-full h-auto" loading="lazy"/>
    </div>
  );
}

export default Mapa