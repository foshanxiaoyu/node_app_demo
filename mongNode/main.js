const express = require('express')
const app = express()
const comp = [
    { name: 'tom', age: 18 },
    { name: 'tom1', age: 19 },
    { name: 'tom2', age: 20 },
    { name: 'tom3', age: 21 },
]
app.get('/', (req, res) => {

    comp.each(function (err, doc) {
        if (doc) {
            console.log(`${doc}`)
        }
        else {
            res.end()
        }
    })
})

app.listen(15006)
console.log('server listening 15006')