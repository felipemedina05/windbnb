import { useState, useEffect } from "react";

function Guest() {

  const [guest, setGuest] = useState(0);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  useEffect(() => {
    total();
  }, [adults,children]);
  const suma = () => {
    setAdults(adults + 1);
    
  };
  const resta = () => {
    setAdults(adults - 1);
    
  };
  const sumaC = () => {
    setChildren(children + 1);
    
  };
  const restaC = () => {
    setChildren(children - 1);
    
  };

  const total = () => {
    setGuest(adults + children);
  };


  return (
    <>
      <div className="contenedor-guest"></div>
      <p id="numGuest" className="result">{guest}</p>

      <p>Adults</p>
      <p>Ages 13 or above</p>
      <div className="modal-Guest">
        <button onClick={resta} on>-</button>
        <p>{adults}</p>
        <button onClick={suma}>+</button>
      </div>

      <p>Children</p>
      <p>Ages 2-12</p>
      <div className="modal-Guest">
        <button onClick={restaC}>-</button>
        <p>{children}</p>
        <button onClick={sumaC}>+</button>
      </div>
    </>
  );
}

export default Guest;
