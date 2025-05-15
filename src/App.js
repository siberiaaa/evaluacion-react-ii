import './App.css';
import Paso2 from './components/Paso2';
import Paso3 from './components/Paso3';
import Paso4 from './components/Paso4';
import Paso6 from './components/Paso6';
import Paso7 from './components/Paso7';
import Paso8 from './components/Paso8';
import Paso9 from './components/Paso9';
import Paso10 from './components/Paso10';

function App() {

  // Paso 3
  const handleClick = (variable) => {
    alert(`Valor de la prop pasada al componente padre: ${variable}.`);
  }
 
  return (
    <div className="App">
      <Paso2 textoBoton="Texto del botón"/>
      <Paso3 onClick={handleClick} uno="abc" dos="def" tres="ghi"/>
      <Paso4/>
      <br/>
      <Paso6/>
      <br/>
      <Paso7/>
      <br/>
      <Paso8/>
      <br/>
      <Paso9/>
      <br/>
      <Paso10/>
    </div>
  );
}

export default App;
