function Formulario() {
  return (
    <div className="flex flex-wrap w-96 flex-col gap-3 inputForm">
      <input type="text" placeholder="Nombre"/>
      <input type="text" placeholder="Correo" />
      <input type="text" placeholder="Password" />
      <input type="text" placeholder="Confirmar password" />
      <input type="text" placeholder="Fecha de nacimiento" />
      <input type="text" placeholder="Pais" />

    </div>
  )
}

export default Formulario