import Seccion1 from '../components/Seccion1';
import Amenidades from '../components/Amenidades';
import Mapa from '../components/Mapa';
import Invierte from '../components/Invierte';
import Productos from '../components/Productos';
import SeccionCarousel from '../components/Carousel';
import Contactanos from '../components/Contactanos';
import UltimosClusters from '../components/UltimosClusters';
import Invertir from '../components/Invertir';
import Footer from '../components/Footer';

function Principal() {
  return (
    <>
     <Seccion1 />
     <Invertir/>
     <Amenidades />
     <SeccionCarousel/>
     <UltimosClusters/>
     <Mapa/>
     <Invierte/>
     <Contactanos/>
     <Productos/>
     <Footer />
    </>
  )
}

export default Principal