import React, {useRef, useEffect} from 'react';
import img1 from './../img/1.png'
import img2 from './../img/2.png'
import styled from 'styled-components';

const Cover  = () => {

    const slideshow = useRef(null);
    const intervaloSlideshow = useRef(null);

    const siguiente = () => {
        if(slideshow.current.children.length > 0) {
            const primerElemento = slideshow.current.children[0];

            slideshow.current.style.transition = `8s cubic-bezier(0.0, 0.0, 0, 0) all`;

            const tamañoSlide = slideshow.current.children[0].offsetWidth;

            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

            const transicion = () => {
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = `translateX(0)`;

                slideshow.current.appendChild(primerElemento);

                slideshow.current.removeEventListener('transitionend', transicion);
            }

            slideshow.current.addEventListener('transitionend', transicion);

        }
    }

    // const anterior = () => {
    //     if(slideshow.current.children.length > 0){

    //         const index = slideshow.current.children.length - 1;
    //         const ultimoElemento = slideshow.current.children[index];
    //         slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);

    //         slideshow.current.style.transition = 'none';

    //         const tamañoSlide = slideshow.current.children[0].offsetWidth;
    //         slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

    //         setTimeout(() => {
    //             slideshow.current.style.transition = '5000ms cubic-bezier(0.0, 0.0, 0, 0) all';
    //             slideshow.current.style.transform = `translateX(0)`;
    //         }, 30)
    //     }
    // }

    // useEffect(() => {
    //     intervaloSlideshow.current = setInterval(() => {
    //         siguiente();
    //     }, 0);

    //     slideshow.current.addEventListener('mouseenter', () => {
    //         clearInterval(intervaloSlideshow.current);
    //     });

    //     slideshow.current.addEventListener('mouseleave', () => {
    //         intervaloSlideshow.current = setInterval(() => {
    //             siguiente();
    //         }, 1000);
    //     });
    // }, );

    return (
        <div className="container-cover d-flex" id="container-cover">

            <div className="content-left">
                <h1>Escuelas iade <span>IT</span></h1>
                <button className="btn btn-danger fw-bold" type="submit">Conocer más</button>
            </div>

            <ContenedorPrincipal className="content-right">
                <ContenedorSlideshow ref={slideshow}>
                    <Slide>
                        <a href="https://www.google.com">
                            <img src={img1} alt="imagen1" />
                        </a>
                    </Slide>
                    <Slide>
                        <a href="https://www.google.com">
                            <img src={img2} alt="imagen1" />
                        </a>
                    </Slide>
                </ContenedorSlideshow>
            </ContenedorPrincipal>

        </div>
    )
}

const ContenedorPrincipal = styled.div`
    position: relative;
`;
const ContenedorSlideshow = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;
const Slide = styled.div`
    min-width: 100%;
    overflow: hidden;
    transition: -3s ease all;
    max-height: 500px;
    position: relative;

    img {
        width: 100%;
        vertical-align: top;
    }
`;
// const TextoSlide = styled.div`
//     background: ${props => props.colorFondo ? props.colorFondo : 'rgba(0,0,0,0.3)'};
//     position: absolute;
//     bottom: 0px;
//     width: 100%;
//     padding: 10px 60px;
//     text-align: center;
//     margin: 0px;
//     color: ${props => props.colorTexto ? props.colorTexto : 'white'};
//     p {
//         margin: 0px;
//     }

//     @media screen and (max-width: 700px) {
//         position: relative;
//         background-color: black;
//     }
// `;

// const Boton = styled.button`
//     pointer-events: all;
//     background: none;
//     border: none;
//     cursor: pointer;
//     ountline: none;
//     width: 50px;
//     height: 88%;
//     text-align: center;
//     position: absolute;
//     transition: .3s ease all;
//     &:hover {
//         background: rgba(0,0,0,0.1);
//         path {
//             transition: all .5s all;
//             fill: white;
//         }
//     }

//     path {
//         filter: ${props => props.derecho ?  'drop-shadow(-2px 0px 0px #fff)' : 'drop-shadow(2px 0px 0px #fff)'}
//     }

//     ${props => props.derecho ? 'right: 0' : 'left: 0'}
// `;


export default Cover;