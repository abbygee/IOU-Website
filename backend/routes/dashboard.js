const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const Item = require("../models/Item");

// TODO: save this secret in some environment variable that isn't public (or obfuscate code)
const secretKey = 'secret123'

// TODO: don't know if I'll need after creating group object
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
 * @method - GET
 * @description - Retrieve total cost of myItems
 * @param - /dashboard/spent
 */
 router.get('/spent', async (req, res) => {
    const token = req.headers['x-access-token']

    try {
        const decoded = jwt.verify(token, secretKey)
        const username = decoded.username
        const user = await User.findOne({ username: username });

        let total = 0.00
        currentItems = user.myItems;
        for (const i in currentItems) {
            total += currentItems[i].price
        }
        
        return res.json({status: 'ok', total: total});
    } catch (e) {
        console.log(e)
        res.send({ status: 'error', message: 'invalid token' });
    }
});

/**
 * @method - GET
 * @description - Retrieve my group
 * @param - /dashboard/group
 */
 router.get('/group', async (req, res) => {
    const token = req.headers['x-access-token']

    try {
        const decoded = jwt.verify(token, secretKey)
        const username = decoded.username
        const user = await User.findOne({ username: username });
        
        return res.json({status: 'ok', group: user.myGroup[0].members});
    } catch (e) {
        console.log(e)
        res.send({ status: 'error', message: 'invalid token' });
    }
});

/**
 * @method - POST
 * @description - Add a member to myGroup
 * @param - /dashboard/add-member
 */
 router.post('/add-member', async (req, res) => {
    const token = req.headers['x-access-token']

    try {
        const decoded = jwt.verify(token, secretKey)
        const username = decoded.username
        const user = await User.findOne({ username: username });

        const newMember = req.body.username;
        
        newGroup = user.myGroup[0].members;
        newGroup.push(newMember);
        
        for (const i in newGroup) {
            let currUser = await User.findOne({ username: newGroup[i] })
            currUser.myGroup[0].members = await newGroup
            currUser.markModified('myGroup');
            await currUser.save();
        }
        
        res.json({status: 'ok', group: user.myGroup[0]});
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

        // TODO: check validation of name, price, peoples, etc. 

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

        // new after group model
        currentGroupItems = user.myGroup[0].items
        currentGroupItems.push(newItem)
        let group = user.myGroup[0].members

        for (const i in group) {
            let currUser = await User.findOne({ username: group[i] })
            currUser.myGroup[0].items = await currentGroupItems;
            currUser.markModified('myGroup');
            await currUser.save();
        }

        await user.save();

        res.json({status: 'ok', items: user.myItems, groupItems: user.myGroup[0].items});
    } catch (e) {
        console.log(e)
        res.send({ status: 'error', message: 'invalid token' });
    }
});

// TODO: check this method with new group object
/**
 * @method - DELETE
 * @description - Delete item from myItems
 * @param - /dashboard/delete
 */
 router.delete('/delete', async (req, res) => {
    const token = req.headers['x-access-token']

    try {
        const decoded = jwt.verify(token, secretKey)
        const username = decoded.username
        const user = await User.findOne({ username: username });

        currentlist = user.myItems;
        currentlist.pop() // just deletes last item btw and only deletes from currently signed in users myItems
        
        user.myItems = await currentlist;
        await user.save();
        res.json({status: 'ok', items: user.myItems});
    } catch (e) {
        console.log(e)
        res.send({ status: 'error', message: 'invalid token' });
    }
});

module.exports = router;