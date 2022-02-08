
const Item = ({name, price, id, description, image, setSelectedItem}) => {

    const selectItem = () => setSelectedItem({name, id, description, image});

  return <div class= "bg-success">
      <h2>Nombre: {name}</h2>
      <h2>Precio: {price}</h2>
      <h2>Description: {description}</h2>
      <img src={image} alt="imagen del mapa" />
      <button onClick={selectItem}>Seleccionar Producto</button>
    <hr/>
  </div>;
};

export default Item;
