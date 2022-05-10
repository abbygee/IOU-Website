const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

const User = require("../models/User");
const Group = require("../models/Group");

const secretKey = 'secret123'

/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp
 */
router.post(
  "/signup", async (req, res) => {

    const displayName = req.body.displayName
    const username = req.body.username
    const password = req.body.password
    
    try {
      let user = await User.findOne({username});
      if (user) {
        // alert('Username is taken, please choose a different one.')
        return res.json({ status: 'error', error: 'Duplicate username' })
      }

      const salt = await bcrypt.genSalt(10);
      const protectedPassword = await bcrypt.hash(password, salt);

      // does this work hmmm
      let newGroup = await Group.create({
        members: [username],
        items: [],
      })

      await User.create({
        username: username,
        password: protectedPassword,
        displayName: displayName,
        myGroup: [newGroup]
      })

      console.log("good job! you registered")
      res.json({ status: 'ok' })

    } catch (err) {
      console.log(err)
      res.json({ status: 'error', error: 'Registration failed' })
    }
  }
);

/**
 * @method - POST
 * @param - /login
 * @description - User Login
 */
router.post(
  "/login", async (req, res) => {

    const username = req.body.username
    const password = req.body.password

    try {
      let user = await User.findOne({
        username: username,
      });

      if (!user)
        return res.status(400).json({
          message: "User Not Exist",
        });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) 
        return res.status(400).json({
          message: "Incorrect Password !",
        });

      const token = jwt.sign(
        {
          username: user.username,
        },
        'secret123'
      ) 
  
      return res.json({ status: 'ok', user: token })

    } catch (e) {
      console.log(err)
      res.json({ status: 'error', error: 'Login failed' })
    }
  }
);

/**
 * @method - DELETE
 * @description - Delete user
 * @param - /user/delete
 */
 router.delete('/delete', async (req, res) => {
  const username = req.body.username

  try {
      await User.deleteOne({ username: username });
      res.json({status: 'ok'});
  } catch (e) {
      console.log(e)
      res.send({ status: 'error', message: 'no.' });
  }
});

/**
 * @method - GET
 * @description - get current logged in username
 * @param - /user/who-am-i
 */
 router.get('/who-am-i', async (req, res) => {
  const token = req.headers['x-access-token']

  try {
      const decoded = jwt.verify(token, secretKey)
      const username = decoded.username
      
      return res.json({status: 'ok', user: username});
  } catch (e) {
      console.log(e)
      res.send({ status: 'error', message: 'invalid token' });
  }
});

module.exports = router;