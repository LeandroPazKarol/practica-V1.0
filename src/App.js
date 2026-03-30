import logo from './logo.svg';
import './App.css';
import { Ejercicio1 } from './componentes/Ejercicio1';
import { Ejercicio2 } from './componentes/Ejercicio2';
import { Ejercicio3 } from './componentes/Ejercicio3';
import { Ejercicio4 } from './componentes/Ejercicio4';
import { Ejercicio5 } from './componentes/Ejercicio5';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Lista de Ejercicio</h2>
        <img src={logo} className="App-logo" alt="logo" />
       
        <Ejercicio1/>
        <br></br>
        <Ejercicio2/>
        <br></br>
        <Ejercicio3/>
        <br></br>
        <Ejercicio4/>
        <br></br>
        <Ejercicio5/> 
        

      </header>
    </div>
  );
}

export default App;
