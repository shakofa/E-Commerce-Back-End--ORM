const router = require('express').Router();
//const {in} = require('sequelize/types/lib/operators');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({include: [product],
  }).then((categories) => res.json(categories))
    .catch((err) => res.status(500).json(err));
  
});



router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  category.findOne({
    where: {id: req.params.id,},
    include: [product],
    include: [category]
  }).then((category) => res.json(category))
  .catch((err) => res.status(400).json(err));
  
});



router.post('/', (req, res) => {
  // create a new category
  category.create(res.body).then((category) => 
  res.status(200).json(category))
  .catch((err) => 
    res.status(400).json(err));
});



router.put('/:id', (req, res) => {
  // update a category by its `id` value
  category.update(req.body, {
    where: { id:req.params.id},
  }).then ((category) => res.status(200).json(category)).catch((err) => res.status(400).json(err));
});



router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  category.destroy({ 
    where:{ id: req.params.id,
    },
  }).then ((category) => res.status(200).json(category)).catch((err) => res.status(400).json(err));
  
});

module.exports = router;
