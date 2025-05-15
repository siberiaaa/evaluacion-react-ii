//Hijo
const ComponenteHijo = () => {
        
    const handleClick = (e) => {
        // Paso 5
        e.stopPropagation()
        //
        alert("Click en el componente Hijo.")
    }

    return (
    <button onClick={handleClick}>Click componente hijo</button>
    )
}

//Padre
function Paso4() {

    const handleClick = () => {
        
        alert("Click en el componente Padre.")
    }

    return (
        <div onClick={handleClick}>
            <h2>Component Padre</h2>
            <ComponenteHijo/>
        </div>
    )
}

export default Paso4

