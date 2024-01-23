import Formulario from "./Formulario";

function Contactanos() {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-9/12 bg-red-500 flex flex-wrap justify-center">
        <div className="w-full bg-yellow-400 flex justify-center">
          <p className="text-3xl colorBanner font-semibold">CONTÁCTANOS</p>
        </div>
        <div className="w-full bg-blue-300 flex flex-wrap justify-center">
            <div className="bg-emerald-200 xs:w-full md:w-9/12 lg:w-6/12 flex justify-center">
              <Formulario />
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default Contactanos;
