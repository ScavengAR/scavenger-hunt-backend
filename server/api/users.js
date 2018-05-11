const router = require('express').Router();
const { User, Result, CustomMap } = require('../db/models');
module.exports = router;

// GET /api/users/:id/results
router.get('/:id/results', (req, res, next) => {
  Result.findAll({
    where: {
      userId: req.params.id
    }
  })
  .then(foundResults => {
    if (!foundResults) {
      res.status(404).send('No results found')
    } else {
      res.json(foundResults)
    }
  })
  .catch(next)
});

// GET /api/users/:id/customMaps
router.get('/:id/customMap', (req, res, next) => {
  CustomMap.findAll({
    where: {
      userId: req.params.id
    }
  })
  .then(foundCustomMaps => {
    if (!foundCustomMaps) {
      res.status(404).send('No custom maps found')
    } else {
      res.json(foundCustomMaps)
    }
  })
  .catch(next)
});
