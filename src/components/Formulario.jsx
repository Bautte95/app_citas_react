const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      <p className="text-lg mt-5 text-center mb-5">Añade pacientes y {''}
      <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5" action="">
        <div className="mb-5">
          <label htmlFor="nombre-mascota" className="block text-gray-700 uppercase font-bold" >Nombre mascota</label>
          <input id="nombre-mascota" className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Nombre de la mascota" />
        </div>
        <div className="mb-5">
          <label htmlFor="nombre-propietario" className="block text-gray-700 uppercase font-bold" >Nombre propietario</label>
          <input id="nombre-propietario" className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Nombre propietario" />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold" >Correo</label>
          <input id="email" className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Correo propietario" />
        </div>
      </form>
    </div>
  )
}

export default Formulario