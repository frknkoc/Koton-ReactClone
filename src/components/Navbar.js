import React from 'react'
import "./styles.css";

function Navbar() {
  return (
        <div className="container-fluid border-bottom shadow">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between px-md-5 py-md-3 mt-1 mb-2">
        <a href="/" class="d-flex align-items-center fs-1 col-md-3 mb-1 mb-md-0 text-dark text-decoration-none">
          KOTON
        </a>

        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link fs-4 px-2 link-dark navbarlink">Home</a></li>
          <li><a href="#" className="nav-link fs-4 px-2 link-dark navbarlink">Features</a></li>
          <li><a href="#" className="nav-link fs-4 px-2 link-dark navbarlink">Pricing</a></li>
          <li><a href="#" className="nav-link fs-4 px-2 link-dark navbarlink">FAQs</a></li>
          <li><a href="#" className="nav-link fs-4 px-2 link-dark navbarlink">About</a></li>
        </ul>

        <div className="col-md-3 text-end d-none d-md-block">
          <button type="button" className="btn btn-outline-primary me-2">Login</button>
          <button type="button" className="btn btn-primary">Sign-up</button>
        </div>
      </header>
    </div>
  )
}

export default Navbar;