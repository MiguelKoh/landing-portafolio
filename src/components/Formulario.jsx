import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {useState} from 'react'
import {Navigate, useNavigate} from 'react-router-dom'
import {useTranslation} from "react-i18next"



function Formulario() {
  const [t]= useTranslation("global");

  const validationSchema = yup.object({
    nombre: yup
      .string()
      .required(t("formulario.campoRequerido"))
      .min(2, t("formulario.nombreMinimo"))
      .max(20, t("formulario.nombreMaximo")),
    
    apellidos: yup
      .string()
      .required(t("formulario.campoRequerido"))
      .min(2, t("formulario.apellidoMinimo"))
      .max(20, t("formulario.apellidoMaximo")),
    
    correo: yup
      .string()
      .required(t("formulario.campoRequerido"))
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, t("formulario.correoValido")),
    
    ciudad: yup.string().required(t("formulario.campoRequerido")),
    
    telefono: yup
      .string()
      .required(t("formulario.campoRequerido"))
      .matches(/^\d{10}$/, t("formulario.telefonoValido")),
    
    deseas: yup.string().required(t("formulario.campoRequerido")),
    tiempo: yup.string().required(t("formulario.campoRequerido")),
  });
  
 const [formStep, setformStep] = useState(1)
 const navigate = useNavigate(); // Correcto uso de useNavigate aquí


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm({ resolver: yupResolver(validationSchema), mode: "onTouched" });

  const onSubmit = (data) => {
    console.log(data);
    navigate('/enviado'); // Usar navigate aquí
  };

  //console.log(errors);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-wrap w-96 flex-col inputForm"
    >
      {formStep=== 1 && (
      <>
         {/* Campo de Nombre */}
         <input type="text" placeholder={t("formulario.nombres")} {...register("nombre")} />
         {errors.nombre && (
           <span className="text-sm text-red-600">{errors.nombre.message}</span>
         )}
   
         {/* Campo de Apellidos */}
         <input
           type="text"
           placeholder={t("formulario.apellidos")}
           className="mt-3"
           {...register("apellidos")}
         />
         {errors.apellidos && (
           <span className="text-sm text-red-600">{errors.apellidos.message}</span>
         )}
   
         {/* Campo de Correo Electrónico */}
         <input
           type="email"
           placeholder={t("formulario.correo")}
           className="mt-3"
           {...register("correo")}
         />
         {errors.correo && (
           <span className="text-sm text-red-600">{errors.correo.message}</span>
         )}
   
         {/* Campo de Ciudad */}
         <input
           type="text"
           placeholder={t("formulario.ciudad")}
           className="mt-3"
           {...register("ciudad")}
         />
         {errors.ciudad && (
           <span className="text-sm text-red-600">{errors.ciudad.message}</span>
         )}
   
         {/* Campo de Teléfono */}
         <input
           type="tel"
           placeholder={t("formulario.telefono")}
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
                value={t("formulario.siguiente")}
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
        <label>{t("formulario.paso2")}</label>
       
        <div className="flex justify-between">
          <input
                type="button"
                value={t("formulario.atras")}
                className="w-28 bg-[#59C2BB] text-white font-semibold cursor-pointer hover:opacity-90 mt-3"
                onClick={()=>{setformStep(1)}}
              />

              <input
                type="button"
                value={t("formulario.siguiente")}
                className="w-28 bg-[#59C2BB] text-white font-semibold cursor-pointer hover:opacity-90 mt-3"
                onClick={()=>{setformStep(3)}}
              />
          </div>

      </>)}
      
      { formStep ===3 && (
      <>
          {/* Campo de para que deseas invertir */}
          <label className="pt-3 pb-2">{t("formulario.paso3Pregunta1")}</label>
    
          <select
            className="py-3 px-3 border-2 border-[#59C2BB] rounded text-[#59C2BB]"
            {...register("deseas")}
          >
            <option value="Para vivir">{t("formulario.paso3Pregunta1option1")}</option>
            <option value="Para comprar y revender">{t("formulario.paso3Pregunta1option2")}</option>
          </select>
    
          {errors.deseas && (
            <span className="text-sm text-red-600">{errors.deseas.message}</span>
          )}
    
          {/* Campo de en cuanto tiempo invertir */}
          <label className="pt-3 pb-2">
            {t("formulario.paso3Pregunta2")}
          </label>
          <select
            className="py-3 px-3 border-2 border-[#59C2BB] rounded text-[#59C2BB]"
            {...register("tiempo")}
          >
            <option value="Inmediatamente">{t("formulario.paso3Pregunta2option1")}</option>
            <option value="12 meses">{t("formulario.paso3Pregunta2option2")}</option>
            <option value="2 años">{t("formulario.paso3Pregunta2option3")}</option>
            <option value="3 años o más">{t("formulario.paso3Pregunta2option4")}</option>
          </select>
    
          {errors.tiempo && (
            <span className="text-sm text-red-600">{errors.tiempo.message}</span>
          )}

          <div className="flex justify-between">
          <input
                type="button"
                value={t("formulario.atras")}
                className="w-28 bg-[#59C2BB] text-white font-semibold cursor-pointer hover:opacity-90 mt-3"
                onClick={()=>{setformStep(2)}}
              />

              <input
                type="submit"
                value={t("formulario.enviar")}
                className="w-28 bg-[#59C2BB] text-white font-semibold cursor-pointer hover:opacity-90 mt-3"
              />
          </div>

      </>
      
      ) }

      <pre>
        {/*JSON.stringify(watch(),null,2)*/}
      </pre>

    </form>
  );
}

export default Formulario;
