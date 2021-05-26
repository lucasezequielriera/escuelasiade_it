import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo1.png';

const Navbar = () => {
    // CAMPUS Button //
    const redireccionarAlCampus = () => {
        window.location = 'http://www.campus.escuelasiade.com'
    }
    // Search Course //
    function inInput() {
        const oscurecer = document.querySelector("#view")
        const botonBuscar = document.querySelector("#search-button")
        oscurecer.style.position = "fixed"
        oscurecer.style.backgroundColor = "rgba(0,0,0,0.8)"
        oscurecer.style.zIndex = "10"
        botonBuscar.classList.remove("btn-outline-danger")
        botonBuscar.classList.add("btn-danger")
    }
    // OnChange Search Course //
    const outInput = () => {
        const oscurecer = document.querySelector("#view")
        const botonBuscar = document.querySelector("#search-button")
        oscurecer.style.backgroundColor = "transparent"
        oscurecer.style.zIndex = "-1"
        botonBuscar.classList.remove("btn-danger")
        botonBuscar.classList.add("btn-outline-danger")
        // Switch to absolute position after 250ms //
        setTimeout(
            function() {
                const oscurecer = document.querySelector("#view")
                oscurecer.style.position = 'absolute'
            }, 250);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
            <div id="view"></div>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand"><img src={logo} alt="logo" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link mx-1">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Certificaciones" className="nav-link mx-1">Certificaciones</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link mx-1 me-3 dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Nuestros Cursos
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link to="/TransformacionDigital" className="dropdown-item">Transformación Digital</Link></li>
                                <li><Link to="FacebookAds" className="dropdown-item">Facebook Ads</Link></li>
                                <li><Link to="GoogleAds" className="dropdown-item">Google Ads</Link></li>
                                <li><Link to="HTML" className="dropdown-item">HTML</Link></li>
                                <li><Link to="Criptomonedas" className="dropdown-item">Criptomonedas</Link></li>
                                <li><Link to="OfficeInicial" className="dropdown-item">Office Inicial</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link to="Proximamente" className="dropdown-item">Próximamente</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <button onClick={redireccionarAlCampus} className="btn btn-danger fw-bold">CAMPUS</button>
                        </li>
                    </ul>
                    <form className="d-flex" id="buscador">
                        <input onFocus={inInput} onBlur={outInput} className="form-control me-2" type="search" placeholder="Nombre del curso" aria-label="Search" />
                        <Link to="/BusquedaDeCurso" id="search-button" className="btn btn-outline-danger fw-bold" type="submit">Buscar curso</Link>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;