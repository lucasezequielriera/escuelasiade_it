import React, {Fragment} from 'react';
import styled, { keyframes } from 'styled-components';

const Background = () => {
    
    return(
        <Fragment>
            <Linea1 className="background-line" uno></Linea1>
            <Linea2 className="background-line" dos></Linea2>
            <Linea3 className="background-line" tres></Linea3>
            <Linea4 className="background-line" cuatro></Linea4>
            <Linea5 className="background-line" cinco></Linea5>
            <Linea6 className="background-line" seis></Linea6>
            <Linea7 className="background-line" siete></Linea7>
            <Linea8 className="background-line" ocho></Linea8>
            <Linea9 className="background-line" nueve></Linea9>
            <Linea10 className="background-line" diez></Linea10>
        </Fragment>
    )
}

const Linea1 = styled.div `
    position: absolute;
    width: 50px;
    height: 1px;
background-color: rgba(0,0,0,0.9);
    top: 100px;
    animation: girar 2s infinite alternate linear;
`;
const Linea2 = styled.div `
    position: absolute;
    width: 50px;
    height: 1px;
background-color: rgba(0,0,0,0.9);
    top: 200px;
    left: 300px;
    animation: girar 2s infinite linear;
`;
const Linea3 = styled.div `
position: absolute;
width: 50px;
height: 1px;
background-color: rgba(0,0,0,0.9);
top: 500px;
left: 800px;
animation: girar 2s infinite linear;
`;
const Linea4 = styled.div `
position: absolute;
width: 50px;
height: 1px;
background-color: rgba(0,0,0,0.9);
top: 500px;
right: 0px;
animation: girar 2s infinite linear;
`;
const Linea5 = styled.div `
position: absolute;
width: 50px;
height: 1px;
background-color: rgba(0,0,0,0.9);
top: 100px;
right: 100px;
animation: girar 2s infinite linear;
`;
const Linea6 = styled.div `
position: absolute;
width: 50px;
height: 1px;
background-color: rgba(0,0,0,0.9);
top: 150px;
right: 400px;
animation: girar 2s infinite linear;
`;
const Linea7 = styled.div `
position: absolute;
width: 50px;
height: 1px;
background-color: rgba(0,0,0,0.9);
bottom: 500px;
right: 0px;
animation: girar 2s infinite linear;
`;
const Linea8 = styled.div `
position: absolute;
width: 50px;
height: 1px;
background-color: rgba(0,0,0,0.9);
bottom: 250px;
left: 100px;
animation: girar 2s infinite linear;
`;
const Linea9 = styled.div `
position: absolute;
width: 50px;
height: 1px;
background-color: rgba(0,0,0,0.9);
left: 200px;
bottom: 50px;
animation: girar 2s infinite linear;
`;
const Linea10 = styled.div `
position: absolute;
width: 50px;
height: 1px;
background-color: rgba(0,0,0,0.9);
top: 110px;
left: 600px;
animation: girar 2s infinite linear;
`;



export default Background;