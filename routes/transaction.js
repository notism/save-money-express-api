const express = require('express');
const router = express.Router();
// const Post = require('../models/Post');
const Transaction = require('../controller/transaction');

router.get('/',Transaction.find);
router.post('/:userId',Transaction.create);


module.exports = router;