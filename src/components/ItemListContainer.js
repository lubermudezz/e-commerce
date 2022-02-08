import { useState } from "react";
import Item from "./Item";
import {items} from "./helper";



// const ItemListContainer = () => {
//     const [selectedItem, setSelectedItem] = useState(null) ;
  
//   return (

//     <div>
//         <h1>Producto Seleccionado:</h1>
//         <p>{selectedItem ? selectedItem.name : "Ninguno"}</p>
//         <hr/>
//         {items.map(({id, name, price}) => (

//         <Item
            
//             key = {id}
//             id={id}
//             name={name}
//             price = {price}
//             setSelectedItem = {setSelectedItem}
            
            
//             />
//         ))}

//     </div>
//   );

  
// };

// export default ItemListContainer;
