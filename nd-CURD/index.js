
// const express = require('express')
// const bodyParser = require('body-parser')
// const usersRoutes = require('./routes/users.js')
import express from 'express'
import bodyParser from 'body-parser'
import usersRoutes from './routes/users.js'
// import usersRoutes from './routes/users.js'

const app = express()
const PORT = process.env.PORT || 15010


app.use(bodyParser.json())

app.use('/users', usersRoutes)

app.get('/', (req, res) => {
    res.send(`<h1 color="pink" >Hello HomePage.</h1>`)
})

app.listen(PORT, () => console.log(`Server Listening on ${PORT}`))