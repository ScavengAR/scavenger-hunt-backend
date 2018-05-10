const router = require('express').Router();
const { User, Result } = require('../db/models');
module.exports = router

// GET /api/users
router.get('/', (req, res, next) => {
  if (req.user !== undefined){
    User.findAll({
      attributes: ['id', 'email']
    })
    .then(users => res.json(users))
    .catch(next)
  } else {
    res.status(404).send('Admin privileges are required to view this information.')
  }
});

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
})
