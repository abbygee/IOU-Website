const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

const User = require("../models/User");

/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp through Pages/Register.js
 */
router.post(
  "/signup", async (req, res) => {
    // console.log(req.body)

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

      await User.create({
        username: username,
        password: protectedPassword,
        displayName: displayName,
      })

      console.log("good job! you registered")
      res.json({ status: 'ok' })

    } catch (err) {
      res.json({ status: 'error', error: 'Registration failed' })
    }
  }
);

router.post(
  "/login",
  [
    check("password", "Please enter a valid password").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

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
      console.error(e);
      res.status(500).json({
        message: "Server Error",
      });
    }
  }
);

module.exports = router;