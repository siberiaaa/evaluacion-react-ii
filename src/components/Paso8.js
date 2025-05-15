import React, { useState } from "react";
import { produce } from 'immer';

function Paso8(){

    const [objeto, setObjeto] = useState({
        producto: {
            nombre: 'Laptop',
            precio: 1200,
            detalles: {
                marca: 'XYZ',
                modelo: 'Pro 15'
            }
        }
    })

    const handleOnChangeNombre = (e)=>{
        setObjeto(produce((draft) => {
            draft.producto.nombre = e.target.value;
        }));
    }

    const handleOnChangeMarca = (e)=>{
        setObjeto(produce((draft) => {
            draft.producto.detalles.marca = e.target.value;
        }));        
    }

    return (
        <div>
            <h3> Mismo mecanismo usando Immer </h3>
            <input type="text" value={objeto.producto.nombre} onChange={handleOnChangeNombre} />
            <h4>Valor de nombre: {objeto.producto.nombre}</h4>
            
            <input type="text" value={objeto.producto.detalles.marca} onChange={handleOnChangeMarca} />
            <h4>Valor de marca: {objeto.producto.detalles.marca}</h4>
        </div>
    )
}

export default Paso8;