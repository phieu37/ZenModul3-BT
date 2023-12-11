let products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' }
];

class ProductController {
  get = (req, res, next) => {
    try {
      const productById = req.params.id
      const { name } = req.query
      let result = [...products]
      // http://localhost:3000/v1/products/1
      if (productById) {
        const product = products.find(product => product.id === parseInt(productById));
        result = product ? [product] : [];
      }
      // http://localhost:3000/v1/products?name=Product 1
      if (name !== undefined) {
        result = result.filter(product => product.name === (name || ''));
      }

      console.log(result)
      res.status(200).json(result)
    } catch (error) {
      next(error)
    }
  }
  create = (req, res, next) => {
    try {
      const { id, name} = req.body;
      console.log(req.body);
      res.status(200).json({
        id,
        name
      })
    } catch (error) {
      next(error)
    }
  }
  update = (req, res, next) => {
    try {
      const productById = req.params.id
      const updatedProductData = req.body
      console.log(productById)
      console.log(updatedProductData)
      
      products = products.map((product) =>
        product.id === parseInt(productById) ? { ...product, ...updatedProductData } : product
      )
      console.log(products);
      res.status(200).json({ products })
    } catch (error) {
      next(error)
    }
  }
  delete = (req, res, next) => {
    try {
      const productById = req.params.id;
      console.log(productById);
      
      products = products.filter(product => product.id !== parseInt(productById))
      
      console.log({ products })
      res.status(200).json({ products })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new ProductController()