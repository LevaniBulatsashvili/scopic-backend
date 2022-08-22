const express = require('express')
const itemController = require('./../controllers/item.controller')


const router = express.Router()

router.route('/').get(itemController.getAllItems).post(itemController.postItem)
router.route('/:id').get(itemController.getItem).patch(itemController.patchItem).delete(itemController.deleteItem)

module.exports = router
