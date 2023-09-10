import { useEffect, useState } from "react";

function Locacion({ locacion, handleLocation }) {
  const [data, setData] = useState([]);

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
    getData();
  }, []);

  const ciudades = [];

  data.filter((el) => {
    return ciudades.push(el.city);
  });

  let result = ciudades.filter((item, index) => {
    return ciudades.indexOf(item) === index;
  });

  return (
    <>
      {" "}
      <div className="modalCompleto">
        <div className="location">
          <p className="result">{locacion}</p>
        </div>

        <div>
          {result.map((el, i) => {
            return (
              <p onClick={handleLocation} key={i}>
                {el}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Locacion;
