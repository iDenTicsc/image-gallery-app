import React, { useCallback, useEffect, useState } from "react";
import Card from "./Card";
import Loading from "./Loading";

//Compoenente que crea la lista de cartas
const Cards = () => {
  const [images, setImages] = useState([]); //Estado para imagenes
  const [input, setInput] = useState(""); //Estado del input del buscador

  //Se usa el useCallback para especificar que mi funcio peticion solo se va a actualizar o relanzar si el estado del buscador cambia
  const peticion = useCallback(async () => {
    const key = "client_id=Ju5wZLByrDS8SDjLcRaicvRPfl9hhEo30w43Mqm7d40"; //Mi key de autorizacion de la API de Unsplash

    let route = `https://api.unsplash.com/photos/?${key}`; //La ruta de la API de Unsplash

    //Este condicional sirve para especificar la URL cuando realizo una busqueda
    if (input !== "") {
      route = `https://api.unsplash.com/search/photos/?query=${encodeURI(
        input
      )}&${key}`;
      //////////
    }
    //Peticion a la API de UNSPLASH
    const res = await fetch(route);
    const data = await res.json(); //Asignacion de la data

    //Condicional para mostrar las imagenes basadas en los parametros ingresados en el buscador, el results es un parametro del JSON cuando se agrega el query de busqueda a mi endpoint
    if (data.results) {
      setImages(data.results);
    } else {
      setImages(data);
    }
  }, [input]);

  //Este useEffect rerenderizara mi sitio web ejecutando la funcion en mi app unicamente si input y peticion cambia
  useEffect(() => {
    peticion();
  }, [input, peticion]);

  //Este handleSubmit hace que no se recargue mi pagina con el submit de mi form y que se setee el texto ingresado en mi buscador al estado de input
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;

    setInput(text);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="w-75">
          {" "}
          Buscar: <input className="w-100 " type="text" name="inputText" />{" "}
        </label>
        <button className="btn btn-warning m-2" type="submit">
          <span className="material-symbols-outlined">search</span>
        </button>
      </form>
      <hr />
      <div className="text-center">
        <Loading />
      </div>

      <div className="row">
        {images.map((img) => {
          return (
            <div key={img.id} className="col">
              <Card img={img.urls.regular} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
