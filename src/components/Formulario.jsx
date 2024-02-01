import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {useState} from 'react'

const validationSchema = yup.object({
  nombre: yup
    .string()
    .required("Campo requerido")
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(20, "Los nombres deben tener máximo al menos 20 caracteres"),
  
  apellidos: yup
    .string()
    .required("Campo requerido")
    .min(2, "Los apellidos deben tener al menos 2 caracteres")
    .max(20, "Los apellidos deben tener máximo 20 caracteres"),
  
  correo: yup
    .string()
    .required("Campo requerido")
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Por favor introduce un formato de correo válido"),
  
  ciudad: yup.string().required("Campo requerido"),
  
  telefono: yup
    .string()
    .required("Campo requerido")
    .matches(/^\d{10}$/, "Por favor introduce un número de teléfono válido"),
  
  deseas: yup.string().required("Campo requerido"),
  tiempo: yup.string().required("Campo requerido"),
});

function Formulario() {
  
 const [formStep, setformStep] = useState(1)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm({ resolver: yupResolver(validationSchema), mode: "onTouched" });

  const onSubmit = handleSubmit((data) => {
   // console.log(data);
  });

  //console.log(errors);
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-wrap w-96 flex-col inputForm"
    >
      {formStep=== 1 && (
      <>
         {/* Campo de Nombre */}
         <input type="text" placeholder="Nombre(s)" {...register("nombre")} />
         {errors.nombre && (
           <span className="text-sm text-red-600">{errors.nombre.message}</span>
         )}
   
         {/* Campo de Apellidos */}
         <input
           type="text"
           placeholder="Apellidos"
           className="mt-3"
           {...register("apellidos")}
         />
         {errors.apellidos && (
           <span className="text-sm text-red-600">{errors.apellidos.message}</span>
         )}
   
         {/* Campo de Correo Electrónico */}
         <input
           type="email"
           placeholder="Correo electrónico"
           className="mt-3"
           {...register("correo")}
         />
         {errors.correo && (
           <span className="text-sm text-red-600">{errors.correo.message}</span>
         )}
   
         {/* Campo de Ciudad */}
         <input
           type="text"
           placeholder="Ciudad"
           className="mt-3"
           {...register("ciudad")}
         />
         {errors.ciudad && (
           <span className="text-sm text-red-600">{errors.ciudad.message}</span>
         )}
   
         {/* Campo de Teléfono */}
         <input
           type="tel"
           placeholder="Teléfono"
           className="mt-3"
           maxLength={10}
           {...register("telefono")}
         />
   
         {errors.telefono && (
           <span className="text-sm text-red-600">{errors.telefono.message}</span>
         )}
         
         <div className="flex justify-end">
         
        
              <input
                type="button"
                value="Siguiente"
                className="w-28 bg-[#59C2BB] text-white font-semibold cursor-pointer hover:opacity-90 mt-3"
                onClick={async () => {
                  // Suponiendo que solo quieres validar ciertos campos en el primer paso
                  const isStep1Valid = await trigger(['nombre', 'apellidos', 'correo', 'ciudad', 'telefono']);
                  
                  if (isStep1Valid) {
                    // Solo avanza al siguiente paso si los campos son válidos
                    setformStep(2);
                  }
                }}
                
              />
          </div>
      
      </> 
      
      )}
      

      {formStep === 2 && (
      <>
        <label>Este producto se encuentra en Sisal, Yucatán, ¿Deseas continuar?</label>
       
        <div className="flex justify-between">
          <input
                type="button"
                value="Atras"
                className="w-28 bg-[#59C2BB] text-white font-semibold cursor-pointer hover:opacity-90 mt-3"
                onClick={()=>{setformStep(1)}}
              />

              <input
                type="button"
                value="Siguiente"
                className="w-28 bg-[#59C2BB] text-white font-semibold cursor-pointer hover:opacity-90 mt-3"
                onClick={()=>{setformStep(3)}}
              />
          </div>

      </>)}
      
      { formStep ===3 && (
      <>
          {/* Campo de para que deseas invertir */}
          <label className="pt-3 pb-2">¿Para qué deseas invertir?</label>
    
          <select
            className="py-3 px-3 border-2 border-[#59C2BB] rounded text-[#59C2BB]"
            {...register("deseas")}
          >
            <option value="Para vivir">Para vivir</option>
            <option value="Para comprar y revender">Para comprar y revender</option>
          </select>
    
          {errors.deseas && (
            <span className="text-sm text-red-600">{errors.deseas.message}</span>
          )}
    
          {/* Campo de en cuanto tiempo invertir */}
          <label className="pt-3 pb-2">
            ¿En cuánto tiempo deseas realizar tu inversión?
          </label>
          <select
            className="py-3 px-3 border-2 border-[#59C2BB] rounded text-[#59C2BB]"
            {...register("tiempo")}
          >
            <option value="Inmediatamente">Inmediatamente</option>
            <option value="12 meses">12 meses</option>
            <option value="2 años">2 años</option>
            <option value="3 años o más">3 años o más</option>
          </select>
    
          {errors.tiempo && (
            <span className="text-sm text-red-600">{errors.tiempo.message}</span>
          )}

          <div className="flex justify-between">
          <input
                type="button"
                value="Atras"
                className="w-28 bg-[#59C2BB] text-white font-semibold cursor-pointer hover:opacity-90 mt-3"
                onClick={()=>{setformStep(2)}}
              />

              <input
                type="submit"
                value="Enviar"
                className="w-28 bg-[#59C2BB] text-white font-semibold cursor-pointer hover:opacity-90 mt-3"
              />
          </div>

      </>
      
      ) }

      <pre>
        {JSON.stringify(watch(),null,2)}
      </pre>

    </form>
  );
}

export default Formulario;
