const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const User = require("../models/User");
// const Item = require("../models/Item");
const Group = require("../models/Group");

// TODO: save this secret in some environment variable that isn't public (or obfuscate code)
const secretKey = 'secret123'

/**
 * @method - GET
 * @description - Retrieve amount you owe to others (in all/not member specific)
 * @param - /group/owe-to-all
 */
 router.get('/owe-to-all', async (req, res) => {
    const token = req.headers['x-access-token']

    try {
        const decoded = jwt.verify(token, secretKey)
        const username = decoded.username
        const user = await User.findOne({ username: username });
        const group = user.myGroup[0] // TODO: multiple group functionality

        let debt = 0.00

        for (const i of group.items) {
            if (i.peoples.includes(username)) {
                if (i.boughtByUser !== username) { // TODO: if user bought should we display it in the "owes" card?
                    toAdd = Math.round(100*(i.price/i.peoples.length))/100 
                    debt += toAdd
                }
            }
        }
        
        return res.json({status: 'ok', debt: debt});
    } catch (e) {
        console.log(e)
        res.send({ status: 'error', message: 'invalid token' });
    }
});

/**
 * @method - GET
 * @description - Retrieve amount everyone else in your group owes you (in all/not member specific)
 * @param - /group/owed-by-all
 */
 router.get('/owed-by-all', async (req, res) => {
    const token = req.headers['x-access-token']

    try {
        const decoded = jwt.verify(token, secretKey)
        const username = decoded.username
        const user = await User.findOne({ username: username });
        const group = user.myGroup[0] // TODO: multiple group functionality

        let debt = 0.00

        for (let i of group.items) {
            if (i.boughtByUser === username) {
                if (i.peoples.includes(username)) {
                    toAdd = i.price - Math.round(100*(i.price/i.peoples.length))/100 
                    debt += toAdd
                } else {
                    debt += i.price
                }
            }
        }
        
        return res.json({status: 'ok', debt: debt});
    } catch (e) {
        console.log(e)
        res.send({ status: 'error', message: 'invalid token' });
    }
});

/**
 * @method - GET
 * @description - Retrieve group's items
 * @param - /group/items
 */
 router.get('/items', async (req, res) => {
    const token = req.headers['x-access-token']

    try {
        const decoded = jwt.verify(token, secretKey)
        const username = decoded.username
        const user = await User.findOne({ username: username });
        
        return res.json({status: 'ok', items: user.myGroup[0].items});
    } catch (e) {
        console.log(e)
        res.send({ status: 'error', message: 'invalid token' });
    }
});

// TODO Member filtering
// /**
//  * @method - GET
//  * @description - Retrieve amount you owe to specific member
//  * @param - /group/owe-to-all
//  */
//  router.get('/owe-to-all', async (req, res) => {
//     const token = req.headers['x-access-token']

//     try {
//         const decoded = jwt.verify(token, secretKey)
//         const username = decoded.username
//         const user = await User.findOne({ username: username });
//         const group = user.myGroup[0] // TODO: multiple group functionality

//         let debt = 0.00

//         for (const i in group.items) {
//             if (i.members.includes(username)) {
//                 toAdd = Math.round(100*(i.price/i.members.length))/100 
//                 debt += toAdd
//             }
//         }
        
//         return res.json({status: 'ok', debt: debt});
//     } catch (e) {
//         console.log(e)
//         res.send({ status: 'error', message: 'invalid token' });
//     }
// });

module.exports = router;