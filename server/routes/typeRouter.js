const Router = require('express')
const { getAll } = require('../controllers/typeController')
const router = new Router()
const typeController = require('../controllers/typeController')


router.post('/', typeController.create)
router.get('/', typeController.getAll)


module.exports = router