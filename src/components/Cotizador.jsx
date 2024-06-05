import logo from "../assets/images/logo_santamar-03_opt.png"
import { lotes, mensualidades } from "../data/lotesYmensualidades"
import { useState, useEffect } from "react";
import formatearCantidad from "../convertirAmoneda";

function Cotizador() {
  const [selectedLote, setSelectedLote] = useState("");
  const [selectedMensualidad, setSelectedMensualidad] = useState("");
  const [enganche, setEnganche] = useState(formatearCantidad(0))
  const [pagoMensual, setPagoMensual] = useState(formatearCantidad(0))

 

  const handleChange = (e)=> {
    if(e.target.name === "lotes"){
      setSelectedLote(e.target.value)
      // setEnganche(e.target.value*0.15)//se multiplica por e.target.value en lugar de selectedLote 
                                        //porque el estado es asincrono es decir setEngache se iba a 
                                        //ejecutar antes de que setSelectedLote actulizara su estado
    } else if(e.target.name === "mensualidades"){
      setSelectedMensualidad(e.target.value)
     }


  }//fin de handleChange

  useEffect(() => {
    if (selectedLote && selectedMensualidad) {
      const nuevoEnganche = selectedLote * 0.15;
      setEnganche(formatearCantidad(nuevoEnganche));

      // Calcular el pago mensual
      const nuevoPagoMensual = (selectedLote - nuevoEnganche) / selectedMensualidad;
      setPagoMensual(formatearCantidad(nuevoPagoMensual));
    }
  }, [selectedLote, selectedMensualidad]);



  return (
      <div className="contenedorCotizador py-4 px-3">
        <h2 className="text-white font-medium xs:text-xl md:text-2xl text-center pb-2 pt-4">
          FINANCIAMIENTO DIRECTO CON NOSOTROS
        </h2>
        <form action="">
          
          <div className="flex flex-wrap">
            <div className="w-[85%]  flex flex-wrap mx-auto">
                <div className="xs:w-full md:w-6/12 p-2 flex flex-wrap justify-center">
              
              <div className="w-[90%] mb-2">
                  <label htmlFor="lotes" className="mb-2 block">Lotes</label>
                
                <select name="lotes" value={selectedLote} onChange={handleChange} className="w-full p-[0.6rem] rounded-sm">
                  <option value="" disabled>Seleccione un lote</option>
                    {lotes.map((lote)=>{
                     return <option key={lote.id} value={lote.precio}>{lote.nombre}</option>
                    })}

              </select>
              
              </div>
              
              <div className="w-[90%] mb-2">
                <label htmlFor="mensualidades" className="mb-2 block">Mensualidades</label>
                <select name="mensualidades" value={selectedMensualidad} onChange={handleChange} className="w-full p-[0.6rem] rounded-sm">
                  <option value="" disabled >Seleccione una mensualidad</option>
                    {mensualidades.map((mensualidad)=>{
                      return <option key={mensualidad.id} value={mensualidad.valor}>{mensualidad.nombre}</option>
                    })}
                  
              </select>
              </div>

                </div>

                <div className="xs:w-full md:w-6/12 p-2 flex flex-wrap justify-center">
              <div className="w-[90%] mb-2">
                <label htmlFor="enganche" className="mb-2 block">Enganche - 15%</label>
                <input type="text" id="enganche" value={enganche} readOnly className="w-full p-2 rounded-sm" />
              </div>

              <div className="w-[90%]">
                <label htmlFor="pagoMensual" className=" mb-2 block">Pago Mensual</label>
                <input type="text" id="pagoMensual" value={pagoMensual} readOnly className="w-full p-2 rounded-sm" />
              </div>
                </div>
            </div>
          </div>
        </form>
        <div className="w-full flex flex-col items-center justify-center py-3">
          {/* <img src={logo} alt="logo"  className=" xs:w-[40%] md:w-[30%] lg:w-[20%] py-3"/> */}
          <p className="text-center text-sm">Información meramente informativa y sujeto a cambio de precio sin previo aviso*</p>
        </div>
      </div>
    
  );
}

export default Cotizador;
