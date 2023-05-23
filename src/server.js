import express  from "express";
import ProductManager from "../ProductManager.js";

const app = express();
app.use(express.urlencoded({extended : true}));

const productos = new ProductManager()
const readProducts = productos.readProducts()

app.get("/products", async (req, res) => {
    console.log(readProducts)});

const PORT = 8080;
const server = app.listen(PORT, () =>{
    console.log(`express server local ${server.address().PORT}`)
}) 

server.on("error", (error) => console.log (`error del servidor ${error}`))



