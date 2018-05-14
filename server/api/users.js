const router = require('express').Router();
const { User, Result, CustomMap } = require('../db/models');
module.exports = router;

// GET /api/users
// Used for auth development.
// To be removed or protected upon deployment
router.get('/', (req, res, next) => {
  User.findAll()
  .then(users => res.json(users))
  .catch(next);
})

// GET /api/users/:id/results
router.get('/:id/results', (req, res, next) => {
  Result.findAll({
    where: {
      userId: req.params.id // this should check that the userId matches the id of the person who is making the request
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
router.get('/:id/customMaps', (req, res, next) => {
  CustomMap.findAll({
    where: {
      userId: req.params.id // same as line 9
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
