import { useForm } from "react-hook-form";

function Formulario() {
  const { register, handleSubmit, formState:{errors} } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  console.log(errors)
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-wrap w-96 flex-col inputForm"
    >
      <input
        type="text"
        placeholder="Nombre(s)"
        
        {...register("nombre", {
          required: {
            value:true,
            message: "Nombre es requerido",
          },
          minLength: {
            value:2,
            message: "El nombre debe tener al menos 2 caracteres"
          },

          maxLength: {
            value: 20,
            message: "Los nombres deben tener maximo al menos 20 caracteres"
          }

        })}
      />
        {errors.nombre && <span className="text-sm text-red-600">{errors.nombre.message}</span>}
      
      <input
        type="text"
        placeholder="Apellidos"
        className="mt-3"
        
        {...register("apellidos", {
          required: {
            value:true,
            message: "Apellidos son requeridos",
          },
          minLength: {
            value:2,
            message: "Los apellidos deben tener al menos 2 caracteres"
          },

          maxLength: {
            value: 20,
            message: "Los apellidos deben tener maximo 20 caracteres"
          }
        })}
      />

      {errors.apellidos && <span className="text-sm text-red-600">{errors.apellidos.message}</span>}
      
      <input
        type="email"
        placeholder="Correo electrónico"
        className="mt-3"
        {...register("correo", {
          required: {
            value: true,
            message: "Correo es requerido",
          },
          pattern: {
            value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Correo no valido"
          }
        })}
      />
      {errors.correo && <span className="text-sm text-red-600">{errors.correo.message}</span>}
      
      <input
        type="text"
        placeholder="Ciudad"
        className="mt-3"
        {...register("ciudad", {
          required: {
            value:true,
            message: "Ciudad es requerido"
          },
        })}
      />
      {errors.ciudad && <span className="text-sm text-red-600">{errors.ciudad.message}</span>}
      <input
        type="tel"
        placeholder="Teléfono"
        className="mt-3"
        maxLength={10}
        {...register("telefono", { 
          required: { 
            value:true,
            message: "Teléfono es requerido"
        },
        pattern:{
          value: /^\d{10}$/,
          message: "Por favor introduce un numero de telefono"
        }
      
      })}
      />
      
      {errors.telefono && <span className="text-sm text-red-600">{errors.telefono.message}</span>}

      <label className="pt-3 pb-2">¿Para qué deseas invertir?</label>
      <select
        className="py-3 px-3 border-2 border-[#59C2BB] rounded text-[#59C2BB]"
        {...register("pais", { 
          required: {
            value: true,
            message: "Pais requerido"
          } 
        })}
      >
        <option value="mexico">Para vivir</option>
        <option value="Colombia">Para comprar y revender</option>
      </select>

      {errors.pais && <span className="text-sm text-red-600">{errors.pais.message}</span>}


      <label className="pt-3 pb-2">¿En cuánto tiempo deseas realizar tu inversión?</label>
      <select
        className="py-3 px-3 border-2 border-[#59C2BB] rounded text-[#59C2BB]"
        {...register("pais", { 
          required: {
            value: true,
            message: "Pais requerido"
          } 
        })}
      >
        <option value="mexico">Inmediatamente</option>
        <option value="Colombia">12 meses</option>
        <option value="Venezuela">2 años</option>
        <option value="Venezuela">3 años o más</option>
      </select>

      {errors.pais && <span className="text-sm text-red-600">{errors.pais.message}</span>}


      <div className="flex justify-end">
        <input
          type="submit"
          value="Enviar"
          className="w-28 bg-[#59C2BB] text-white font-semibold cursor-pointer hover:opacity-90 mt-3"
        />
      </div>


    </form>
  );
}

export default Formulario;
