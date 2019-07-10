const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth')
require('dotenv').config();


// User Model
const User = require('../../models/User')

// @route        GET api/auth
// @description  Authenticate / Login User
// @access       Public

router.post('/', (req, res) => {
  const { email, password } = req.body

  // simple validation
  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields '});
  }

  // Check for existing user
  User.findOne({email})
    .then(user => {
      if (!user) return res.status(400).json({ msg: 'User does not exist' });

      // validate password
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if(!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });

          // create JWT token and send along with user data
          jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET,
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email
                }
              })
            }
          )
        })
    })
});

// @route         GET api/auth/user
// @description   Get user data based on Token
// @access        Private
router.get('/user', auth, (req, res) => {
  User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
})


module.exports = router;
