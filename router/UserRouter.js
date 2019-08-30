const router = require('express').Router()
const { UserController } = require('../controllers')

router.get('/', UserController.getAll)
router.post('/', UserController.create)
router.delete('/:id', UserController.delete)

module.exports = router