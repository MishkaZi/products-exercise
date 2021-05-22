const express = require('express');
const dollsLogic = require('./dolls-logic');

const router = express.Router();

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


module.exports = router;
