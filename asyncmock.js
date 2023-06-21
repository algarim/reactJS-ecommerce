const misProductos = [
    {id: 1, nombre: "Juanito", precio: 50, img: "https://placekitten.com/900/599", descripcion: "Juanito es un gatito cariñoso y aventurero. Le gusta saltar por los muebles como un loco."},
    {id: 2, nombre: "Coquito", precio: 30, img: "https://placekitten.com/900/600", descripcion: "Coquito es re tranqui. Se tira despatarrado en su cucha a dormir y se despierta para comer. Importante: no hay que molestarlo mientras duerme."},
    {id: 3, nombre: "Florentina", precio: 75, img: "https://placekitten.com/901/600", descripcion: "Florentina es una gata inteligente y suspicaz. Preparada para cualquier situación que se le presente. Disfruta la soledad, pero es muy leal con sus amigos."},
    {id: 4, nombre: "Enriqueta", precio: 100, img: "https://placekitten.com/900/601", descripcion: "Enriqueta era en algún tiempo una araña que se movía sigilosa por los tejados de la ciudad. Hoy es una gatita alegre que se mueve sigilosa por los tejados de la ciudad."},
]

export const getProductos = () => {
    return new Promise( (resolve) => {
        setTimeout( () => {
            resolve(misProductos);
        }, 2000)
    })
}

// Creamos una función similar a la anterior pero que nos retorne un solo item:

export const getUnProducto = (id) => {
    return new Promise ( (resolve) => {
        setTimeout( () => {
            const producto = misProductos.find( prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}