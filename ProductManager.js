import fs from 'fs'

 export default class ProductManager {
    constructor()  {
        this.patch = "./productos.txt"
        this.products = []
    }
    static id = 0

    addProduct = async (title, description, price, thumbnail, code, stock) => {

        ProductManager.id++
        let newProduct = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id: ProductManager.id
        }

        this.products.push(newProduct)
        
        await fs.promises.writeFile(this.patch, JSON.stringify(this.products))
    }
    
    readProducts = async () => {
        let respuesta = await fs.promises.readFile(this.patch, "utf-8")
        return JSON.parse(respuesta)
    }

    getProducts = async () => {
        let respuesta2 = await this.readProducts()
        return  console.log(respuesta2)
     }

     getProductsById = async (id) => {
        let respuesta3 = await this.readProducts()
        if(!respuesta3.find(product => product.id === id)){
            console.log('No existe el producto')
        } else{
            console.log(respuesta3.find((product) => product.id === id))
        }
     }


     deleteProducts = async (id) => {
        let respuesta3 = await this.readProducts()
        let filterRespuesta3 = respuesta3.filter(products => products.id != id)
        await fs.promises.writeFile(this.patch, JSON.stringify(filterRespuesta3))
        console.log('Elimino el Producto')
    }

    updateProducts = async ({id, ...producto}) => {
        await this.deleteProducts(id)
        let productOld = await this.readProducts()
        let productsModif = [ {id, ...producto}, ...productOld]
        await fs.promises.writeFile(this.patch, JSON.stringify(productsModif))
    }


}




const productManager = new ProductManager
//productManager.addProduct('Camiseta', 'camiseta de argentina', 35000, 'https://sporting.vtexassets.com/arquivos/ids/745384-800-800?v=638144070712970000&width=800&height=800&aspect=true', 321, 124)
//productManager.addProduct('Botines', 'calzado de futsal',23099, 'https://sporting.vtexassets.com/arquivos/ids/775442-800-800?v=638174132235970000&width=800&height=800&aspect=true', 322, 98)
//productManager.addProduct('Short', 'puma independiente', 18000, 'https://sporting.vtexassets.com/arquivos/ids/592062-800-800?v=637951312534800000&width=800&height=800&aspect=true', 323, 25)
//productManager.addProduct('Camiseta Boca', 'camiseta de boca', 19200, 'https://almacenfamily.com/productos/7792798002115-355-5ee921024bc57.jpg', 324, 103) 


//productManager.getProducts()

//productManager.getProductsById(1)


//productManager.deleteProducts(2)

productManager.updateProducts({
    title: 'Camiseta',
    description: 'camiseta de argentina',
    price: 35000,
    thumbnail: 'https://sporting.vtexassets.com/arquivos/ids/745384-800-800?v=638144070712970000&width=800&height=800&aspect=true',
    code: 321,
    stock: 124,
    id: 1
})


