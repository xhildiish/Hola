const express = require('express');
const router = express.Router();

//item model
const Item = require ('../../model/item');

// @route   GET api/items
// @desc    Get all items
// @access  Public
router.get('/' , (req, res) =>
{
Item.find()
    .sort( {date: -1}) //sort descending
    .then(item => res.json(item))
    .catch( err =>console.log(err));
});




// @route   DELETE api/items/id
// @desc    Deletes a single item by id
// @access  Public
router.delete('/:id', (req, res) =>
{
    Item.findById(req.params.id)
        .then(item => item
            .remove()
            .then( () => res
                .status(200)
                .json({ success: true }))
            .catch((error) => res.status(500).json({ message: "Unable to delete item" })))
        .catch((error) => res
            .status(404).json({ message: "Not found" }));
});

//get by id
router.get('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => res.json(item))
        .catch(error => res.status(404).json(error));
})

// @route   PUT api/items/id
// @desc    Updates a specific item by id
// @access  Public
router.put('/:id', (req, res) => {
    Item
        .findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            date: req.body.date })
        .then(item => res.json(item))
        .catch(error => res.json(error));
});


// You actually don't have an endpoint for adding
//

router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        origin: req.body.origin,
        price: req.body.price,
        quantity: req.body.quantity
    });

    newItem.save()
        .then(item => res.json(item))
        .catch(error => res.json({ error }));
});

module.exports = router;