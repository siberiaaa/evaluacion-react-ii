function Paso3(props) {

    const handleClick = () => {
        // Pasando valor de la prop al padre
        props.onClick(props.uno);
        alert(`Prop 1: ${props.uno}, Prop 2: ${props.dos}, Prop 3: ${props.tres}`);
    }

    return (
        <button onClick={handleClick}>Paso 3</button>

    )
}

export default Paso3

