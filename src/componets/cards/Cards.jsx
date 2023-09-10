
import { useEffect, useState } from "react";





function Cards({arreglo}) {

  return (
    <>
      
      <div className="contenedor">

        {arreglo.map((el, i) => {
          return (
            <div className="cards">
              <div className="card">
                
                <div className="photo">
                  {" "}
                  <img key={i} src={el.photo} alt={el.title} />{" "}
                </div>
                <div className="descripcion">
                  {el.superHost == true ? (
                    <div key={i} className="superHost">
                      {" "}
                      SUPER HOST
                    </div>
                  ) : (
                    <div />
                  )}
                  <span>
                    {el.type} {el.beds ? el.beds + " beds" : ""}
                  </span>
                  <div className="calificacion">
                    <span>
                      <span class="material-icons">star</span>
                      {el.rating}{" "}
                    </span>
                  </div>
                </div>

                <div>
                  <span>{el.title}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cards;
