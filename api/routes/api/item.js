const express = require('express');
const router = express.Router();


const Item = require ('../../model/item');

router.get('/' , (req, res) =>
{
Item.find()
    .sort( {date: -1}) //sort descending
    .then(item => res.json(item))
    .catch( err =>console.log(err));
});

module.exports = router;