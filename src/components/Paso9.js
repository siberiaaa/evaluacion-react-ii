import React, { useState } from "react";

function Paso9(){

    const [items, setItems] = useState([
        'perro',
        'gato',
        'pato',
        'caballo',
        'conejo'
    ]);

    const agregarItem = () => {
        setItems([...items, 'Ganso'])
    }
    
    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>
            <button onClick={agregarItem}>Agregar item</button>
        </div>
    )

}
export default Paso9;