const router = require('express').Router();
const {User} = require('../db/models');
module.exports = router

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
