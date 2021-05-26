import React, {useRef, useState} from 'react';

function Imagen() {
    const divRef = useRef(null)
    const [ food, setFood ] = useState('')
    const logText = () => {
      console.log(food)
    }
  
    return (
      <div>
        <input value={food} onChange={e => setFood(e.target.value)}/>
  
        <div ref={divRef}>I wanto to eat {food}</div>
  
        <button onClick={logText}>Log Text!</button>
      </div>
    )
  }

export default Imagen;