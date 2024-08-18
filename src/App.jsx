// import logo from './logo.svg';
// import logo1 from '/Users/raul/Desktop/Preentrega1-Querol-React/project1/src/logo1.png';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {NavBar} from "./components/NavBar/index";
import logo1 from './images/logo1.png';
import { ItemListContainer } from './component/ItemListContainer';

function App() {

  return (
    <div className="App">
      <NavBar logo={logo1} />
      <ItemListContainer mesage={"Welcome to Oh my T'shirt Shop"} logo={logo1}/>
    </div>
  );
}

export default App;