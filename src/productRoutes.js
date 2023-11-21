import express from "express";
import ProductManager from "../tienda";

const router = express.Router();
const productManager = new ProductManager('./productos.json');

router.get("/", (req,res) => {
    try{
        const limit = req.query.limit;
        const products = productManager.getProducts();

        if(limit){
            res.json(products.slice(0,limit));
        } else{
            res.json(products);
        }

    } catch(error){
        console.error('Error, no se pudo obtener el producto', error);
        res.status(500).json({error: 'Error al obtener productos'});

    }
});

router.get('/:pid', (req,res) => {
    try{
        const productId = parseInt(req.params.pid);
        const product = productManager.getProductById(productId);

        if(product){
            res.json(product);
        } else{
            res.status(404).json({error:'Producto no encontrado'});
        }

    } catch(error){
        res.status(500).json({error:'Error al obtener el producto'});
    }
});

export default router;

