const express=require ('express');
const router =express.Router();

const homeController=require('../controller/index');

//home route
router.get('/',homeController.home);

//route to add user
router.post('/add_user',homeController.addUser);

// route to add product
router.post('/add',homeController.add);

//route to view all product
router.get('/allProduct',homeController.read);

//route to view product by id
router.get('/productById/',homeController.productId);

//route to update product
router.post('/update/:id',homeController.update);

//route to delete product
router.delete('/delete/:id',homeController.deleteProduct);

//route to add review
router.post('/addReview',homeController.createReview);

//route to delete review
router.delete('/deleteReview/:id',homeController.deleteReview);

//route to show all review
router.get('/show_review',homeController.showAll);

module.exports=router;