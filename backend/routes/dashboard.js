// const express = require("express");
// const router = express.Router();
// const jwt = require("jsonwebtoken");

// const auth = require("./../middleware/auth");
// const User = require("../models/User");
// const Item = require("../models/Item");

// // TODO: Does this just check if the user is signed in?
// router.use('/create', verifyAuthToken)
// router.use('/signup', verifyAuthToken)

// /**
//  * @method - GET
//  * @description - Retrieve shopping list
//  * @param - /shop/list
//  */
// router.get('/list', auth, async (req, res) => {
//     try {
//       // request.user is getting fetched from Middleware after token authentication
//       const user = await User.findById(req.user.id);
//       res.json(user.shoppinglist);
//     } catch (e) {
//       res.send({ message: 'Error in Fetching user' });
//     }
// });

// /**
//  * @method - POST
//  * @description - Add an item to the dashboard table
//  * @param - /dashboard/add
//  */
//  router.post('/add', auth, async (req, res) => {
//     try {
//         const name = req.body.name;
//         const price = req.body.price;
//         const peoples = req.body.peoples;

//         const user = await User.findById(req.user.id);
        
//         currentlist = user.shoppinglist;
        
//         currentlist.push(item);
        
//         user.shoppinglist = await currentlist;
//         await user.save();
//         res.json(user.shoppinglist);
//     } catch (e) {
//       res.send({ message: 'Error in Fetching user' });
//     }
// });

// /**
//  * @method - DELETE
//  * @description - Delete item from shopping list
//  * @param - /shop/delete
//  */
//  router.delete('/delete', auth, async (req, res) => {
//     try {
//         const item = req.body.item;
//         const user = await User.findById(req.user.id);
//         currentlist = user.shoppinglist;
//         // currentlist.pop()
        
//         const index = currentlist.indexOf(item);
//         if (index > -1) {
//             currentlist.splice(index, 1);
//         }
        
//         user.shoppinglist = await currentlist;
//         await user.save();
//         res.json(user.shoppinglist);
//     } catch (e) {
//       res.send({ message: 'Error in Fetching user' });
//     }
// });

// module.exports = router;