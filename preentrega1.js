class ProductManager {
    
    constructor() {
        this.products = []
    }


    getProducts = () => this.products

    generateId = () => (this.products.length === 0) ? 1 : this.products[this.products.length-1].id + 1
    
    addProduct = (title, description, price, stock) => {
        this.products.push({id: this.generateId(), title, description, price, stock})
    }
    
}

const productManager = new ProductManager()
productManager.addProduct('camiseta', 'de argentina', '$34000','25')
productManager.addProduct('short', 'boca juniors', '$12300','14')
console.log(productManager.getProducts())