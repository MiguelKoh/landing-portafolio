function Formulario() {
  return (
    <form className="flex flex-wrap w-96 flex-col gap-3 inputForm">
      <input type="text" placeholder="Nombre" />
      <input type="text" placeholder="Correo" />
      <input type="text" placeholder="Password" />
      <input type="text" placeholder="Confirmar password" />
      <input type="text" placeholder="Fecha de nacimiento" />
      <input type="text" placeholder="Pais" />
      <div className="flex justify-end">
        <input type="button" value="Enviar" className="w-28 bg-[#59C2BB] text-white font-semibold cursor-pointer hover:opacity-90"  />
      </div>
    </form>
  );
}

export default Formulario;
