import Seccion1 from './components/Seccion1'
import Amenidades from './components/Amenidades';
import Mapa from './components/Mapa';
import Invierte from './components/Invierte';
import Productos from './components/Productos';
import Footer from './components/Footer';
import SeccionCarousel from './components/Carousel';
import Contactanos from './components/Contactanos';

function App() {
  return (
    <>
      <Seccion1 />
      <Amenidades />
      <SeccionCarousel/>
      <Mapa/>
      <Invierte/>
      <Contactanos/>
      <Productos/>
      <Footer/>
    </>
  );
}

export default App