import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Locacion from "../location/Locacion";
import Guest from "../guest/Guest";

function Buscador({
  locacion,
  handleLocation,
  show,
  handleClose,
  buscarM,
  
  
 
}) {
  const [mostrarL, setMostrarL] = useState(false);
  const handleLocations = () => {
    setMostrarL(!mostrarL);
  };

  const [mostrarG, setMostrarG] = useState(false);
  const handleGuest = () => {
    setMostrarG(!mostrarG);
  };

  return (
    <>
      <div className="modal-contenedor">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="modal-ttitle">Edit your search</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body">
            <div>
              <p className="result" onClick={handleLocations}>
                Location
              </p>

              <div className={mostrarL == true ? "" : "ocultarL"}>
                <Locacion
                  locacion={locacion}
                  handleLocation={handleLocation}
                ></Locacion>
              </div>
            </div>

            <div>
              <p className="result" onClick={handleGuest}>
                Guest
              </p>
              <div className={mostrarG == true ? "" : "ocultarG"}>
                <Guest  
                  
                >
                  {" "}
                </Guest>
              </div>
            </div>

            <div>
              <div>
                <button onClick={buscarM} className="search1">
                  <span class="material-symbols-outlined">search</span>
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default Buscador;
