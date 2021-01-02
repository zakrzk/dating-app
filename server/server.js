const express = require('express')
const app = express()
const port = process.env.SERVER_PORT

app.get('/test', (req, res) => {
    res.json({ message: 'This message comes from the server-container. (API Request)' })
})

app.get('/database', (req, res) => {

})

app.listen(port, () => {
    console.log(`Server's running at http://localhost:${port}`)
})