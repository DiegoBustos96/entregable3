import express from "express";
import ProductRouter from './src/productRoutes.js'

const app = express();
const PORT = 8080;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/products',ProductRouter);



app.listen(PORT,()=>{
    console.log(`Server listening on PORT ${PORT}`);
});
