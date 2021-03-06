const router = require('express').Router();
const { Result } = require('../db/models');
module.exports = router;

// GET /api/results
router.get('/', (req, res, next) => {
  Result.findAll({
    order: [['time', 'ASC']], // order times from least to greatest
    limit: 10 // fetch top 10 scores
  })
    .then(results => res.json(results))
    .catch(next);
});

// GET /api/results/quickPlay
router.get('/quickPlay', (req, res, next) => {
  Result.findAll({
    where: {
      mapId: null
    },
    order: [['time', 'ASC']], // order times from least to greatest
    limit: 10 // fetch top 10 scores
  })
    .then(results => res.json(results))
    .catch(next);
});

// POST /api/results
router.post('/', (req, res, next) => {
  Result.create(req.body)
    .then(newResult => res.status(201).json(newResult))
    .catch(next);
});
