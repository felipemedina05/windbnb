import { useEffect, useState } from "react";
import "./App.css";
import Barra from "./componets/barra/Barra";
import Cards from "./componets/cards/Cards";
import Footter from "./componets/footter/Footter";
import Buscador from "./componets/modal/Buscador";

function App() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      setData(resJson);
      setFiltered(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [locacion, setLocacion] = useState("");
  const handleLocation = (e) => {
    const locacion = e.target.textContent;
    setLocacion(locacion);
  };

  const [guespedes,setGuespedes]= useState("");
  
    const numeroGu=()=>{
      const numGuest = document.querySelector.value("#numGuest")
    console.log(numGuest)
    setGuespedes(numGuest)
  }
  
  const buscarM = () => {
    const ciudad = locacion;

    console.log(ciudad);
    const datosFiltrados = data.filter((lugar) => lugar.city == ciudad);

    setFiltered(datosFiltrados);
    handleClose();
    numeroGu()
  };

  return (
    <>
      <div className="cabecera">
        <div className="busqueda">
          <Barra handleClose={handleClose} handleShow={handleShow} />
          <Buscador
            locacion={locacion}
            handleLocation={handleLocation}
            buscarM={buscarM}
            show={show}
            handleClose={handleClose}
            
            
          ></Buscador>
        </div>
      </div>
      <div className="titulo">
        <h3>Stays in Finland</h3>
      </div>
      <div className="contenedor">
        <Cards arreglo={filtered}></Cards>
      </div>
      <footer>
        <Footter></Footter>
      </footer>
    </>
  );
}

export default App;
