import React from 'react';
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom';
import logo from '../logo1.png';

const Navbar = () => {

    const redireccionarAlCampus = () => {
        window.location = 'http://www.campus.escuelasiade.com'
    }

    const mostrarInput = () => {
        // const cover = document.querySelector("body");
        // const buscador = document.querySelector("#buscador");
        // cover.style.filter = 'brightness(0.3)';
        // buscador.style.position = 'relative';
        // buscador.style.zIndex = 9999;
        // buscador.style.filter = 'brightness(1)';
        const view = document.querySelector('#view');
        const cover = document.querySelector('#container-cover');
        const dropdown = document.querySelector('.dropdown-menu');
        view.style.filter = 'brightness(0)';
        view.style.zIndex = 10;
        cover.style.filter = 'brightness(0.3)';
        cover.style.zIndex = 10;
        dropdown.style.zIndex = 99999999;
    }

    const salirInput = () => {
        // const cover = document.querySelector("body");
        // const buscador = document.querySelector("#buscador");
        // cover.style.filter = 'brightness(1)';
        // buscador.style.zIndex = 1;
        const view = document.querySelector('#view');
        const cover = document.querySelector('#container-cover');
        const dropdown = document.querySelector('.dropdown-menu');
        view.style.filter = 'brightness(1)';
        view.style.zIndex = -9999;
        cover.style.filter = 'brightness(1)';
        cover.style.zIndex = -999;
        dropdown.style.zIndex = 99999999;
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
                            <Link to="/" className="nav-link mx-1 active">Inicio</Link>
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
                        <input onFocus={mostrarInput} onBlur={salirInput} className="form-control me-2" type="search" placeholder="Nombre del curso" aria-label="Search" />
                        <button className="btn btn-outline-danger fw-bold" type="submit">Buscar curso</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;