import React, {useRef, useEffect} from 'react';

const Cover  = () => {

    const imagenes = useRef(null);
    const siguiente = () => {

        if (imagenes.current.children.length > 0) {

            const primerImagen = imagenes.current.children[0];
            imagenes.current.style.transition = '1000ms ease-out all';
            
            const tamañoImagen = imagenes.current.children[0].offsetWidth;
            
            imagenes.current.style.transform = `translateX(-${tamañoImagen}px)`;

            const transicion = () => {
                imagenes.current.style.transition = 'none';
                imagenes.current.style.transform = `translateX(0)`;
            }

            imagenes.current.appendChild(primerImagen);
            imagenes.current.removeEventListener('transitionend', transicion);

            imagenes.current.addEventListener('transitionend', transicion);
        }

    }

    useEffect(() => {
        setInterval(() => {
            siguiente()
        }, 1000)
    }, []);

    return (
        <div className="container-cover" id="container-cover">
            <div className="content-left">
                <h1>Escuelas iade <span>IT</span></h1>
                <button className="btn btn-danger" type="submit">Conocer más</button>
            </div>
            <div className="content-right d-flex">
                <div className="imagenes" ref={imagenes}>
                    <div className="imagen bg-primary">01</div>
                    <div className="imagen bg-secondary">02</div>
                    <div className="imagen bg-light">03</div>
                    <div className="imagen bg-dark">04</div>
                    <div className="imagen bg-danger">05</div>
                    <div className="imagen bg-warning">06</div>
                </div>
            </div>
        </div>
    )
}

export default Cover;