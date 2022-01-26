import { useState } from "react";
import CartWidget from "./CartWidget";
import Item from "./Item";

const items = [
    {id: "1", name: "mapaUno", price: "25"},
    {id: "2", name: "mapaDos", price: "20"},
    {id: "3", name: "mapaTres", price: "35"}

];


const ItemListContainer = () => {
    const [selectedItem, setSelectedItem] = useState(null) ;
  
  return (

<div>
    <h1>Producto Seleccionado:</h1>
    <CartWidget/>
    <p>{selectedItem ? selectedItem.name : "Ninguno"}</p>
    <hr/>
    {items.map(({id, name, price}) => (

    <Item
        
        key = {id}
        id={id}
        name={name}
        price = {price}
        setSelectedItem = {setSelectedItem}
        
        
        />
    ))}

</div>
  );

  
};

export default ItemListContainer;
