const router = require('express').Router()

router.use('/api', require('./apiRoutes.js'))

router.get('/notes', (req, res) => {
    res.sendFile(join(__dirname, '..', 'public', 'notes.html'))
  })
  
  router.get('/*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'public', 'index.html'))
  })

module.exports = router