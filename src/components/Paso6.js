import React, {useState} from 'react';

function Paso6() {
    const [contador, setContador] = useState(0);

    const handleClick = () => {
        setTimeout(()=>{
            setContador(contador + 1);
            alert(`Valor de contador en la instantánea anterior: ${contador}`);
        }, 1000)
    }

    return (
        <div>
            <h2>Cambiar estado (incrementar con timeout)</h2>
            <button onClick={handleClick}> Incrementar </button>
            <h3>Valor del estado (contador): {contador}</h3>
        </div>
    );
}

export default Paso6;