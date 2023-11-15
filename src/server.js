import express from "express";
import ProductRouter from './src/productRoutes.js'

const app = express();
const port = 8080;
app.use(express.json());
app.use('/products',ProductRouter);
app.listen(port,()=>{
    console.log(`Server listening on PORT ${port}`);
});
