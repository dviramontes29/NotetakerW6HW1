const express = require('express')
const { join } = require('path')

const app = express()

app.use(express.static(join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use('/api', require('./routes/apiRoutes.js'))
app.use('/', require('./routes/viewRoutes.js'))

app.listen(process.env.PORT || 3000)