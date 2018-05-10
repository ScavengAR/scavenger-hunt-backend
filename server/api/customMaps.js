const router = require('express').Router();
const { CustomMap } = require('../db/models');

// GET /api/customMaps
router.get('/', (req, res, next) => {
  CustomMap.findAll()
  .then(customMaps => res.json(customMaps))
  .catch(next);
})
