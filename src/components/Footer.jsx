import React from "react";

//Este componente tiene el footer de mi pagina web hecho con bootstrap
const Footer = () => {
  return (
    <nav class="navbar navbar-dark bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <p className="navbar-brand h1 ">
          Sebastian Carmona - &copy; {new Date().getFullYear()}
        </p>
      </div>
    </nav>
  );
};

export default Footer;
