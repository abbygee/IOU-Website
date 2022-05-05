const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const Item = require("../models/Item");

// TODO: save this secret in some environment variable that isn't public (or obfuscate code)
const secretKey = 'secret123'

/**
 * @method - GET
 * @description - Retrieve myItems
 * @param - /dashboard/items
 */
router.get('/items', async (req, res) => {
    const token = req.headers['x-access-token']

    try {
        const decoded = jwt.verify(token, secretKey)
        const username = decoded.username
        const user = await User.findOne({ username: username });
        
        return res.json({status: 'ok', items: user.myItems});
    } catch (e) {
        console.log(e)
        res.send({ status: 'error', message: 'invalid token' });
    }
});

/**
 * @method - POST
 * @description - Add an item to the dashboard table
 * @param - /dashboard/add
 */
 router.post('/add', async (req, res) => {
    const token = req.headers['x-access-token']

    try {
        const decoded = jwt.verify(token, secretKey)
        const username = decoded.username

        const name = req.body.name;
        const price = req.body.price;
        const peoples = req.body.peoples;

        const user = await User.findOne({ username: username });

        let newItem = await Item.create({
            name: name,
            price: price,
            peoples: peoples,
            boughtByDisplay: user.displayName,
            boughtByUser: user.username,
        })
        
        currentItems = user.myItems;
        currentItems.push(newItem);
        
        user.myItems = await currentItems;
        await user.save();

        res.json({status: 'ok', items: user.myItems});
    } catch (e) {
        console.log(e)
        res.send({ status: 'error', message: 'invalid token' });
    }
});

/**
 * @method - DELETE
 * @description - Delete item from shopping list
 * @param - /shop/delete
 */
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

module.exports = router;