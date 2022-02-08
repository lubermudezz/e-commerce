export const items = [
    {id: "1", name: "mapaUno", price: "25", description: "esta es la descripción del mapa uno", image: "https://www.mundo-minecraft.com/wp-content/uploads/2018/09/mundoantiguo.jpg"},
    {id: "2", name: "mapaDos", price: "20", description: "esta es la descripcion del mapa dos", image: "https://i.blogs.es/896adb/minecraft/450_1000.png"},
    {id: "3", name: "mapaTres", price: "35", description: "esta es la descripcion del mapa tres", image: "https://i.blogs.es/e17558/minecraft-generacionxbox-1/450_1000.jpeg"}

];

export const task = new Promise ((resolve, reject) => {
    setTimeout (() => {
        
      resolve (true)

    }, 2000)
})

export const itemsAPI = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve (items)
    }, 2000);
})
