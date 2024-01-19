import Card from "./Card";
import Loading from "./Loading";
import FormImg from "./FormImg";
import { useFetchImages } from "../hooks/useFetchImages";
import React from "react";

//Compoenente que crea la lista de cartas
const Cards = () => {
  const [images, loading, handleSubmit] = useFetchImages();
  return (
    <>
      <FormImg handleSubmit={handleSubmit} />
      <hr />
      {/* Este operador ternario hara que se muestre el componente loading basado en su state */}
      <div className="text-center">{loading && <Loading />}</div>

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
