const express = require('express');
const router = express.Router();
// const Post = require('../models/Post');
const User = require('../controller/user');

router.get('/',User.find);
router.post('/',User.create);
router.patch('/:userId', User.patch);
router.delete('/:userId', User.delete);

router.post('/register',User.register);
router.post('/login',User.login);

module.exports = router;