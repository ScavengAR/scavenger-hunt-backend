const router = require('express').Router();
const { CustomMap, MapItem, Result } = require('../db/models');
module.exports = router;

// GET /api/customMaps
router.get('/', (req, res, next) => {
  CustomMap.findAll()
    .then(customMaps => res.json(customMaps))
    .catch(next);
});

// POST /api/customMaps
router.post('/', (req, res, next) => {
  CustomMap.create(req.body)
    .then(newMap => res.status(201).json(newMap))
    .catch(next);
});

// GET /api/customMaps/:id
router.get('/:id', (req, res, next) => {
  CustomMap.findOne({
    where: {
      id: req.params.id
    },
    include: [{ all: true }]
  })
    .then(map => res.json(map))
    .catch(next);
});

// GET /api/customMaps/:id/results
router.get('/:id/results', (req, res, next) => {
  Result.findAll({
    where: {
      mapId: req.params.id
    },
    order: [['time', 'ASC']], // order times from least to greatest
    limit: 10 // fetch top 10 scores
  })
    .then(results => res.json(results))
    .catch(next);
});
