import { useEffect, useState } from "react";
import Error from "./Error";

const Formulario = ({pacientes,setPacientes}) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [estadoError, setError] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if([nombre, propietario, email, alta, sintomas].includes('')){

      setError(2);
      return;
    }

    const getId = () => {
      const date = Date.now().toString(36);
      const random = Math.random().toString(36).substring(2);
      return date + random;
    };

    const listaPacientes = {
      nombre,
      propietario,
      email,
      alta,
      sintomas,
      id: getId()
    };

    setPacientes([...pacientes, listaPacientes]);

    setError(3);
    setNombre('');
    setPropietario('');
    setEmail('');
    setAlta('');
    setSintomas('');
  }


  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      <p className="text-xl mt-5 text-center mb-5">
        Añade pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5">
        <Error
          estadoError = {estadoError}
        />
        <div className="mb-5">
          <label
            htmlFor="nombre-mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre mascota
          </label>
          <input
            id="nombre-mascota"
            className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre de la mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="nombre-propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre propietario
          </label>
          <input
            id="nombre-propietario"
            className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Correo
          </label>
          <input
            id="email"
            className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email"
            placeholder="Correo propietario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="alta"
            className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="sintomas"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer"
          value="Agregar"
        />
      </form>
    </div>
  );
};

export default Formulario;
