const router = require('express').Router();
const { CustomMap, MapItem } = require('../db/models');
module.exports = router;

// GET /api/customMaps
router.get('/', (req, res, next) => {
  CustomMap.findAll()
  .then(customMaps => res.json(customMaps))
  .catch(next);
})

// GET/api/customMaps/:id
router.get('/:id', (req, res, next) => {
  MapItem.findOne({
    where: {
      customMapId: req.params.id
    },
    include: [{
      all: true
    }]
  })
  .then(itemsForMap => {
    res.json(itemsForMap)
  })
  .catch(next);
})
