import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/logo.jpg'
function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-body-gamerCorp"> 
                <div class="container-fluid">
                    <img src={logo} alt="Logo" className="navbar-logo" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Products</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav">
                                <li class="nav-item">
                                    <CartWidget/>
                                </li>
                            </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;