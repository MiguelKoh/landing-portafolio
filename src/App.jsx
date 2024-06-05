import Footer from "./components/Footer";
import Principal from "./Pages/Principal";
import Enviado from "./Pages/Enviado";
import Pagina404 from "./Pages/Pagina404";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/enviado" element={<Enviado />} />
          <Route path="*" element={<Pagina404 />} />
        </Routes>
      </BrowserRouter>  
    </>
  );
}

export default App;
