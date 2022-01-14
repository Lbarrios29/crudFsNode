import * as fs from 'node:fs';
import { Contenedor } from "../desafio2/contenedor.js";

const product = {
    title:"Esponja",
    price:234.45,
    thumbnail:'https://res.cloudinary.com/dd0wq3bwd/image/upload/v1638825462/productos/paleta_mwqvgt.jpg'
}

async function main(){

    try {
     
        const productFile = new Contenedor(fs,'./productos.txt');

        // CREA EL ARCHIVO CON EL CONTENIDO
        console.log("METODO SAVE");
        const id = await productFile.save(product);
        console.log("Producto grabado en el archivo productos.txt" + " con el id: " + id);
        console.log("\n");

        // OBTIENE TODO EL CONTENIDO DEL ARCHIVO Y LO MUESTRA
        console.log("METODO GETALL");
        const productos = await productFile.getAll();
        console.log(productos);
        console.log("\n");

        // OBTIENE PRODUCTO POR SU ID
        console.log("METODO GETBYID");
        let getId=2;
        const producto = await productFile.getById(getId);
        if (!producto) {
            console.log("Producto: " + getId + " no existe...");
        }else{  
            console.log(producto);
        }
        console.log("\n");

        // ELIMINA PRODUCTO POR ID
        console.log("METODO DELETEBYID");
        let productId=4;
        const deleteId = await productFile.deleteById(productId);
        if (!deleteId) {
            console.log("No existe id: " + productId + " para eliminar el producto");
        }else{
            console.log("Producto Id: " + productId + " eliminado correctamente");
        }
        console.log("\n");
        
        // ELIMINA TODOS LOS PRODUCTOS EN EL ARCHIVO
        console.log("METODO DELETEALL");
        productFile.deleteAll();
        console.log("Se eliminaron todos los objetos correctamente")
        console.log("\n");        

    } catch (error) {
        console.log(error);
    }

}

// PROGRAMA PRINCIPAL
main();