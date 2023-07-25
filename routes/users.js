const express = require('express')
const router = express.Router()
const {getUsers,addUser,getUser,updateUser,deleteUser} = require('../controllers/user')

router.route('/users').get(getUsers).post(addUser)
router.route('/users/:id').get(getUser).patch(updateUser).delete(deleteUser)

module.exports = router