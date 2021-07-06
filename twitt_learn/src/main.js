console.log("Hi start....");
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 15001
// const URL_HOST = 'http://127.0.0.1:9900' || 'https://foshanxiaoyu.com';

const app = express()
// const form = document.querySelector('form')

// form.addEventListener('submit')

app.use(cors())


app.use('/', (req, res) => {
    // res.render('index.html', {})
    res.json({ 'path': '~/projects/nde/day20' })
})

app.post('/mews', (req, res) => {
    let browsObj = res.body
    res.send(browsObj)
})

app.listen(port, console.log(`Server Listening on the ${port}....`))