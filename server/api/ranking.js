const router = require('express').Router();
const { Ranking } = require('../db/models')
module.exports = router;

// GET /api/ranking
router.get('/', (req, res, next) => {
  Ranking.findAll()
    .then(currentRanking => res.json(currentRanking))
    .catch(next)
})

// POST /api/ranking
router.post('/', (req, res, next) => {
  // req.body = { name: 'Cody', score: 1000 }
  Ranking.create(req.body)
    .then(newScore => res.json(newScore))
    .catch(next)
})
