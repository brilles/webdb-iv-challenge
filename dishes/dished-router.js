const express = require('express');
const router = express.Router();

const db = require('../data/dbConfig.js');
const Dishes = require('./dishes-model.js');

// handles /api/dishes
router.get('/', async (req, res) => {
  try {
    const dishes = await Dishes.getDishes(); // all the dishes in the DB
    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const dish = await Dishes.getDish(req.params.id);
    res.status(200).json(dish);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
