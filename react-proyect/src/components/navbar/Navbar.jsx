import './Navbar.css';
import { Link } from 'react-router';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/logo.jpg';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-body-gamerCorp">
        <div className="container-fluid">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <Link to="/" className="nav-link fw-bold">Home</Link>
              </li>
              <li className="nav-item mx-3">
                <Link to="/categoria/computadora" className="nav-link fw-bold">Computadora</Link>
              </li>
              <li className="nav-item mx-3">
                <Link to="/categoria/celular" className="nav-link fw-bold">Celular</Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item ms-3">
                <Link to="/carrito" className="nav-link">
                  <CartWidget />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;