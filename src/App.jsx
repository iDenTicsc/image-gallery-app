import React from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";

//Componente principal de todo mi sitio web
const App = () => {
  return (
    <div>
      <Header />
      <Container />
      <Footer />
    </div>
  );
};

export default App;
