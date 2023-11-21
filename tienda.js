import fs from 'fs';

export class ProductManager {
  constructor(filePath) {
    this.path = filePath;
  }

  getProducts() {
    try {
      const data = fs.readFileSync(this.path, "utf8");
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  addProduct(product) {
    const products = this.getProducts();

    const lastProduct = products[products.length - 1];
    product.id = lastProduct ? lastProduct.id + 1 : 1;

    products.push(product);

    fs.writeFileSync(this.path, JSON.stringify(products, null, 2));

    return product;
  }

  getProductById(id) {
    const products = this.getProducts();
    return products.find((product) => product.id === id);
  }

  updateProduct(id, updatedProduct) {
    const products = this.getProducts();
    const index = products.findIndex((product) => product.id === id);

    if (index !== -1) {
      updatedProduct.id = id;
      products[index] = updatedProduct;
      fs.writeFileSync(this.path, JSON.stringify(products, null, 2));
      return updatedProduct;
    } else {
      return null;
    }
  }

  deleteProduct(id) {
    const products = this.getProducts();
    const updatedProducts = products.filter((product) => product.id !== id);
    fs.writeFileSync(this.path, JSON.stringify(updatedProducts, null, 2));
  }
}



const productManager = new ProductManager("products.json");

productManager.addProduct({
  id:1,
  title: "Camiseta",
  description: "Camiseta de algodón",
  price: "$"+ 19.990,
  thumbnail: "camiseta.jpg",
  code: "CAM001",
  stock: 100,
});

productManager.addProduct({
  id:2,
  title: "Pantalón",
  description: "Pantalón de mezclilla",
  price: "$"+15.990,
  thumbnail: "pantalon.jpg",
  code: "PAN002",
  stock: 100,
});


productManager.addProduct({
  id:3,
  title: "Buzo",
  description: "Buzo con diseño rata",
  price: "$"+25.990,
  thumbnail: "pantalon.jpg",
  code: "BUZ003",
  stock: 100,
});

productManager.addProduct({
  id:4,
  title: "Guantes",
  description: "Guantes de invierno",
  price: "$"+5.990,
  thumbnail: "guantes.jpg",
  code: "GNT003",
  stock: 100,
});

productManager.addProduct({
  id:5,
  title: "Bufanda",
  description: "Bufanda facherita",
  price: "$"+9.990,
  thumbnail: "bufanda.jpg",
  code: "BFD005",
  stock: 100,
});

productManager.addProduct({
  id:6,
  title: "Cinturón",
  description: "Cinturón hombre",
  price: "$"+12.990,
  thumbnail: "cinturon.jpg",
  code: "CTN006",
  stock: 100,
});

productManager.addProduct({
  id:7,
  title: "Chaqueta impermeable",
  description: "Chaqueta impermeable",
  price: "$"+25.990,
  thumbnail: "impermeable.jpg",
  code: "IPM007",
  stock: 100,
});

productManager.addProduct({
  id:8,
  title: "Chaleco verano",
  description: "Chaleco verano",
  price: "$"+20.990,
  thumbnail: "chaleco.jpg",
  code: "CLO008",
  stock: 100,
});

productManager.addProduct({
  id:9,
  title: "Calcetines",
  description: "Calcetines",
  price: "$"+3.990,
  thumbnail: "calcetines.jpg",
  code: "CLO009",
  stock: 100,
});

productManager.addProduct({
  id:10,
  title: "Polera",
  description: "Polera manga corta",
  price: "$"+10.990,
  thumbnail: "polera.jpg",
  code: "POL010",
  stock: 100,
});


const allProducts = productManager.getProducts();
console.log(allProducts);

const product = productManager.getProductById(1);
console.log(product);

productManager.updateProduct(1, {
  title: "Nueva Camiseta",
  description: "Camiseta de algodón mejorada",
  price: 24.99,
  thumbnail: "nueva_camiseta.jpg",
  code: "CAM002",
  stock: 150,
});

productManager.deleteProduct(1);

export default ProductManager;