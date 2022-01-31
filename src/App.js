import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {useState} from 'react';


function App () {

  const [count, setCount] = useState (0);
  const [date, setDate] = useState (null);
  const addCount = () => {
    const date = new Date();
    const hour = date.getHours ();
    const minute = date.getMinutes();
    const seconds = date.getSeconds ();
    setDate({hour, minute, seconds})
    setCount(count +1)
  };
  const discount = () => {setCount(count -1)}
  const printDate= () => {
    return <p> Time: {date.day}:{date.minute}:{date.seconds} </p>
  }
  return (
    <div> 

  <div className="App">
      <NavBar />
      <h1>Bienvenidos a la tienda de Minecraft By Jockerel</h1>
      <hr/>
      <ItemListContainer/>
    
</div>

    <div class="button-count">
    <h1>{count ? count : 'Not count'}</h1>
    {date ? printDate() : ''}
    <button onClick = {addCount}>Agregar item</button>
    <button onClick = {discount}>Eliminar item</button>
      </div>
 </div>
  );
}

export default App;
