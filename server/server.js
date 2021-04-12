import * as express from 'express';
import * as session from 'express-session';
import * as bodyParser from 'body-parser';

import {sequelize} from "./util/database.js";

import {User} from "./models/user.model.js";
import {Hobby} from "./models/hobby.model.js";

const app = express();
import authRoutes from './routes/auth.routes'
const PORT = process.env.SERVER_PORT || 3006;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
    secret: process.env.SESSION_SECRET || "secret",
    resave: false,
    saveUninitialized: false
}));

app.get('/auth', authRoutes)
app.use((error, req, res) => {
    console.log(error);
    res.status(400).send(error.toString())
});

Hobby.belongsTo(User, {
    constraints: true,
    onDelete: 'CASCADE' // also delete all user's hobbies
});
User.hasMany(Hobby);

sequelize
    .sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server's running at http://localhost:${PORT}`)
        });
    }).catch(err => {
    console.log(err)
});
