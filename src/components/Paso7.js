import React, { useState } from "react";

function Paso7(){

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
        setObjeto({
            ...objeto,
            producto:{
                ...objeto.producto,
                nombre: e.target.value
            }   
        });
    }

    const handleOnChangeMarca = (e)=>{
        setObjeto({
            ...objeto,
            producto:{
                ...objeto.producto,
                detalles:{
                    ...objeto.producto.detalles,
                    marca: e.target.value
                }
            }         
        });
    }

    return (
        <div>
            <input type="text" value={objeto.producto.nombre} onChange={handleOnChangeNombre} />
            <h4>Valor de nombre: {objeto.producto.nombre}</h4>
            
            <input type="text" value={objeto.producto.detalles.marca} onChange={handleOnChangeMarca} />
            <h4>Valor de marca: {objeto.producto.detalles.marca}</h4>
        </div>
    )
}

export default Paso7;