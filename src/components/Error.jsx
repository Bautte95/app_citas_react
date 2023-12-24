const Error = ({estadoError}) => {

  if(estadoError === 2){
    return (
      <div className="bg-red-800 text-white uppercase text-center align-middle p-2 mb-5 rounded
           -md">
        <p>Todos los campos son obligatorios</p>
      </div>
    )
  }else if(estadoError === 3){
    return (
      <div className="bg-green-800 text-white uppercase text-center align-middle p-2 mb-5 rounded
           -md">
        <p>Datos ingresados correctamente</p>
      </div>
    )
  }
}


export default Error