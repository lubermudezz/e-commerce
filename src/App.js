import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Bienvenidos a la tienda de Minecraft By Jockerel</h1>
      <hr/>
      <ItemListContainer/>
    </div>

  );
}

export default App;
