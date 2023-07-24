const router = require('express').Router()
const { getAll } = require('../controllers/countryController')
const { validate } = require('../validators')
const { auth ,isAdmin} = require('../middleware/auth')
// const { rules: updateRules } = require('../validators/user/update')
// const { userFile } = require('../middleware/fileUpload')

// router.post('/update', [auth, userFile, updateRules, validate], update)
router.get('/', [auth,isAdmin], getAll)

module.exports = router