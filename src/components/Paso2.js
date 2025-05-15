function Paso2(props) {

    const handleClick = () => {
        alert(props.textoBoton);
    }

    return (
        <button onClick={handleClick}>{props.textoBoton}</button>

    )
}

export default Paso2

