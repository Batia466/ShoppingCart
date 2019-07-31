const express = require('express')

var cors = require('cors')
const app = express()
app.use(cors())
const port = 3500
app.get("/", (request, response) => {
    response.send('Hello from Express!')
})
const items = [
    { "name": "Women's Boots Shoes Maca", "price": "139.00", "photo": "./images/item-1.jpg", "key": "1" },
    { "name": "Boots Shoes ", "price": "2239.00", "photo": "./images/item-2.jpg", "key": "2" },
    { "name": " Maca", "price": "549.00", "photo": "./images/item-3.jpg", "key": "3" },
    { "name": " Maca 2", "price": "732.00", "photo": "./images/item-4.jpg", "key": "4" },
    { "name": " SUperman Boots ", "price": "332.00", "photo": "./images/item-5.jpg", "key": "5" }
    ];
app.get("/all_items", (request, response) => {
    response.send(items)
})
app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})

app.use((err, request, response, next) => {
    // логирование ошибки, пока просто console.log
    console.log(err)
    response.status(500).send('Something broke!')
})