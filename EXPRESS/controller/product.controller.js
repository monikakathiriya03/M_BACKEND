const ProductServices = require('../services/product.service');
const productService = new ProductServices();

exports.addProduct = async (req, res) => {
        let product = await ProductService.getProduct({title: title, isDelete: false});
        // console.log(product);
        if(product) {
            return res.status(400).json({message: 'Product is already exist...'});
        }
        product = await ProductService.addNewProduct({...req.body});
        res.status(201).json({product: product, message: 'New Product Added Successfully...'});
};

exports.getAllProducts = async (req, res) => {
        let products = await ProductService.getAllProducts({ isDelete: false });
        console.log(products);
        res.status(200).json(products);
};

exports.getProduct = async (req, res) => {
        const id = req.query.id;
        let product = await ProductService.getProduct({_id:id, isDelete: false});
        res.status(200).json(product);
    
};

exports.updateProduct = async (req, res) => {
    try {
        let productId = req.query.productId;
        let product = await Product.findById(productId);
        if(!product){
            return res.status(404).json({message: 'Product Not Found'});
        }
        product = await Product.findOneAndUpdate({_id:product._id}, {$set : { ...req.body}}, { new : true});
        res.status(200).json({message: 'Product Updated Successfully...'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        let productId = req.query.productId;
        let product = await Product.findById(productId);
        if(!product){
            return res.status(404).json({message: 'Product Not Found'});
        }
        product = await Product.findOneAndUpdate({_id: product._id}, {isDelete: true}, {new: true});
        res.status(200).json({product, message: 'Product Deleted Successfully...'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};