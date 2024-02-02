import Footer from "./components/Footer";
import Principal from "./Pages/Principal";
import Enviado from "./Pages/Enviado";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/enviado" element={<Enviado />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
