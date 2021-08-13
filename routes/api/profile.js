const express = require('express');
const router = express.Router();

//@route  GET api/Profile
//@desc   Test route 
//@access   Public


router.get('/', (req, res) => res.send('Profile route'));
module.exports = router; 