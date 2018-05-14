const router = require('express').Router();
const { CustomMap, MapItem } = require('../db/models');
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
})

// GET/api/customMaps/:id
router.get('/:id', (req, res, next) => {
  CustomMap.findOne({
    where: {
      id: req.params.id
    },
    include: [{
      all: true
    }]
  })
  .then(itemsForMap => {
    res.json(itemsForMap)
  })
  .catch(next);
});
