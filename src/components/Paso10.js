import React from "react";

function Paso10(){

    const copias = () => {

        const producto = {
            nombre: "Laptop",
            precio: 1200,
            detalles: {
              marca: "XYZ",
              modelo: "Pro 15"
            }
        };

        const copiaProducto = {
            ...producto,
            detalles: {
                ...producto.detalles
            }
        }

        console.log(`Objeto copiado`);
        console.log(copiaProducto);

        producto.precio = 666;

        copiaProducto.detalles.modelo = "aaa"

        console.log(`Verificación del objeto copiado luego de modificar`);
        console.log(copiaProducto);
        
        console.log(`Verificación del objeto original luego de modificar`);
        console.log(producto);

    }

    return (
        <button onClick={copias}>Paso 10</button>
    )
}

export default Paso10;