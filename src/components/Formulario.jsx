import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = yup.object({
  nombre: yup
    .string()
    .required("Nombre es requerido")
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(20, "Los nombres deben tener máximo al menos 20 caracteres"),
  
  apellidos: yup
    .string()
    .required("Apellidos son requeridos")
    .min(2, "Los apellidos deben tener al menos 2 caracteres")
    .max(20, "Los apellidos deben tener máximo 20 caracteres"),
  
  correo: yup
    .string()
    .required("Correo es requerido")
    .email("Correo no válido"),
  
  ciudad: yup.string().required("Ciudad es requerido"),
  
  telefono: yup
    .string()
    .required("Teléfono es requerido")
    .matches(/^\d{10}$/, "Por favor introduce un número de teléfono válido"),
  deseas: yup.string().required("Campo requerido"),
  tiempo: yup.string().required("Campo requerido requerido"),
});

function Formulario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  console.log(errors);
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-wrap w-96 flex-col inputForm"
    >
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

      {/* Campo de para que deseas invertir */}
      <label className="pt-3 pb-2">¿Para qué deseas invertir?</label>

      <select
        className="py-3 px-3 border-2 border-[#59C2BB] rounded text-[#59C2BB]"
        {...register("deseas")}
      >
        <option value="mexico">Para vivir</option>
        <option value="Colombia">Para comprar y revender</option>
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
        <option value="mexico">Inmediatamente</option>
        <option value="Colombia">12 meses</option>
        <option value="Venezuela">2 años</option>
        <option value="Venezuela">3 años o más</option>
      </select>

      {errors.tiempo && (
        <span className="text-sm text-red-600">{errors.tiempo.message}</span>
      )}

      <div className="flex justify-end">
        <input
          type="submit"
          value="Siguiente"
          className="w-28 bg-[#59C2BB] text-white font-semibold cursor-pointer hover:opacity-90 mt-3"
        />
      </div>
    </form>
  );
}

export default Formulario;
