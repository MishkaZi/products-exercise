const express = require('express');
const dollsLogic = require('./dolls-logic');

const router = express.Router();




router.get('/only-owned', async (req, res, next) => {
  try {
    const dolls = await dollsLogic.getOnlyOwned();
    res.json(dolls);
  } catch (error) {
    return next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await dollsLogic.getOneUser(id);
    res.json(result);
  } catch (error) {
    return next(error);
  }
});




router.get('/', async (req, res, next) => {
  try {
    const dolls = await dollsLogic.getAllDolls();
    res.json(dolls);
  } catch (error) {
    return next(error);
  }
});


router.put('/:id', async (req, res, next) => {
  try {
    const updatedDoll = req.body;
    const id = req.params.id;
    const result = await dollsLogic.updateDoll(updatedDoll, id);
    res.json(result);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
