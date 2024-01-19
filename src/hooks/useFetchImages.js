import { useCallback, useEffect, useState } from "react";

export const useFetchImages = () => {
  const [images, setImages] = useState([]); //Estado para imagenes
  const [input, setInput] = useState(""); //Estado del input del buscador

  const [loading, setLoading] = useState(false); //Estado para la pantalla de carga

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

    setLoading(true); //Antes de hacer la peticion a la API setteo el estado en true para mostrar el cargando

    //Peticion a la API de UNSPLASH
    const res = await fetch(route);
    const data = await res.json(); //Asignacion de la data

    //Condicional para mostrar las imagenes basadas en los parametros ingresados en el buscador, el results es un parametro del JSON cuando se agrega el query de busqueda a mi endpoint
    if (data.results) {
      setImages(data.results);
    } else {
      setImages(data);
    }

    setLoading(false); //Cuando se carga mi peticion cambio el estado a false para que desaparezca
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

  return [images, loading, handleSubmit];
};
