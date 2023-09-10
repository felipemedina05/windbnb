
import { useState } from "react";

import Buscador from "../modal/Buscador";

function Barra({handleShow}) {
 
  return (
    <>
      <div className="barra">
        <img className="imagen" src="./src/img/logo.png" alt="logo" />
        <div className="botones">
          <button onClick={handleShow}>Whole, Findland</button>
          <button onClick={handleShow}>Add guests</button>
          <button type="button" onClick={handleShow}>
            <span class="material-symbols-outlined">search</span>
          </button>
        </div>
      </div>

      
    </>
  );
}

export default Barra;
