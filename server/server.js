import {getTestMessage} from "./controllers/getTestMessage.controller.js";
import sequelize from "sequelize";

const express = require('express')
const app = express()
const PORT = process.env.SERVER_PORT

app.get('/test', (req, res) => {
    res.json({ message: 'This message comes from the server-container. (API Request)' })
})

app.get('/database', [], getTestMessage)

sequelize
    .sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server's running at http://localhost:${PORT}`)
        });
    }).catch(err => {
    console.log(err)
});
