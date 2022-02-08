
import { cloneElement, useEffect, useState } from "react";
import Item from "./Item";
import {items} from "./helper";
import { itemsAPI } from "./helper";

const ItemDetailContainer = () => {
    const [selectedItem, setSelectedItem] = useState(null) ;
        useEffect (() => {
        getItems();
    })
  return (

    <div>
        <h1>Producto Seleccionado:</h1>
        <p>{selectedItem ? selectedItem.name : "Ninguno"}</p>
        <p>{selectedItem && selectedItem.id}</p>
        <p>{selectedItem && selectedItem.description}</p>
        <p>{selectedItem && selectedItem.image && (<img src={selectedItem.image} alt = "selectedItemImage" />)}</p>


        <hr/>
        {items.map(({id, name, price, description, image}) => (

        <Item
            
            key = {id}
            id={id}
            name={name}
            price = {price}
            description={description}
            image = {image}
            setSelectedItem = {setSelectedItem}
            
            
            />
        ))}

    </div>
  );



};

export default ItemDetailContainer;


const getItems = async () => {
    try {
        const result = await itemsAPI;
        console.log (result);
    } catch (error) {
        console.log ({error});
    } finally {
        console.log ("finalización")
    }
}

