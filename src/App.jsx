import Formulario from "./components/Formulario";
import Header from "./components/Heade";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  return (
    <div className="container mx-auto">
      <Header/>
      <div className="mt-12 flex">
      <Formulario/>
      <ListadoPacientes/>
      </div>
      
    </div>
  )
}

export default App
