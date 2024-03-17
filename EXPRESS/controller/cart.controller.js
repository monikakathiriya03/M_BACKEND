const Cart = require('../model/cart.model');

exports.addToCart = async (req, res) => {
    try {
        let cart = await Cart.findOne({
            user: req.user._id,
            cartItem: req.body.cartItem,
            isDelete: false
        });
        if (cart) {
            return res.json({ message: 'Cart already Exist..' });
        }
        cart = await Cart.create({
            user: req.user._id,
            ...req.body
        });
        cart.save();
        res.json({ cart, message: 'Cart added'});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};

exports.getAllCart = async (req, res) => {
    try {
        let carts = await Cart.find({ user: req.user._id, isDelete: false });
        res.status(200).json(carts);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};

exports.getCart = async (req, res) => {
    try {
        let cart = await Cart.findOne({_id: req.query.cartId, isDelete: false});
        console.log(cart);
        if(!cart){
            return res.status(404).json({message: 'Cart Not Found'});
        }
        res.status(200).json(cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};

exports.updateCart = async(req, res) =>{
    try {
        let cart = await Cart.findOne({_id: req.query.cartId});
        // console.log(cart);
        if(!cart){
            return res.status(404).json({message: `Cart Not Found ...${console.error()}`});
        }
        cart = await Cart.findOneAndUpdate({_id:cart._id}, {$set : {...req.body}}, { new : true}).populate('user').populate('cartItem');
        res.status(200).json({cart,message:`Cart Item Updated Successfully...`});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: `Internal Server Error...${console.error()}`});
    }
};

exports.deleteCart = async(req,res) => {
    try {
        let cart = await Cart.findOne({_id: req.query.cartId});
        // console.log(cart);
        if(!cart){
            return res.status(404).json({message: `Cart Not Found...${console.error()}`});
        }
        cart = await Cart.findOneAndUpdate({cartId: cart.cartId},{isDelete: true},{new:true});
        res.status(200).json({cart,message:`Cart Deleted Successfully...`});
    }catch(error){
        console.error(error);
        res.status(500).json({message:`  Internal Server Error...${console.error()}`});
    }
};