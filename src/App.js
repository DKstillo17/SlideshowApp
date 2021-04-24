import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Diapositivas from "./components/Diapositivas";
//Parcial SlideShowApp Unidad 2 - Daniel Castillo 
function App ({ diapositivas }) {
  return (
    //Creamos un container donde se almacenarán el navegador y las diapositivas
    <div className="container">
        <Nav></Nav>
        <Diapositivas  diapositivas={diapositivas} />
    </div>
  );
}

export default App;
