const router = require('express').Router()

router.get('/home', (req, res) => {
    return res.send('Home screen')
})

router.use('/api/v1/auth', require('./auth'))
router.use('/api/v1/users', require('./user'))
router.use('/api/v1/baseInfo/country', require('./country'))

module.exports = router