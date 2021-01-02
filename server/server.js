const express = require('express')
const app = express()
const port = 3005

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/test', (req, res) => {
    res.json({ message: 'This message comes from the server-container. (API Request)' })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})