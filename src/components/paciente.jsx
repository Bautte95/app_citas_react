const Paciente = ({datosPacientes}) => {

  const {nombre, propietario, email, alta, sintomas} = datosPacientes;
  return (
      <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold text-gray-700 uppercase">
          Nombre: {''}
          <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold text-gray-700 uppercase">
          Propietario: {''}
          <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold text-gray-700 uppercase">
          Email: {''}
          <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold text-gray-700 uppercase">
          Fecha Alta: {''}
          <span className="font-normal normal-case">{alta}</span>
        </p>
        <p className="font-bold text-gray-700 uppercase">
          Sintomas: {''}
          <span className="font-normal normal-case">{sintomas}</span>
        </p>
      </div>
  )
}

export default Paciente