import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/home">Mostafa Alsamman</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#about">Who I Am</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#portofoliosection">portofolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#location">testimonials</a>
        </li>
        <li className="nav-item">
          <a href="#contactForm" className="nav-link">keep in touch</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Navbar;
