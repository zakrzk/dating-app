import {Hobby} from "../models/hobby.model";
import {User} from "../models/user.model";
import * as jwt from "jsonwebtoken";
import {validationResult} from "express-validator";

export const addHobby = (req, res) => {

    let value = req.body.value;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send(errors.array())
    }
    const token = req.get('Authentication').split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    User.findByPk(decodedToken.userId)
        .then(user => user.addHobby({value: value}))
        .then(() => {
            res.sendStatus(201);
        })
        .catch(err => console.log(err));
};

export const getHobby = (req, res) => {
    Hobby.findAll({
        limit: 100,
        order: [['updatedAt', 'DESC']],
        include: [{
            model: User,
            as: User.name,
            attributes: ['name']
        }],
        attributes: ['value', 'createdAt'],
    })
        .then(hobbies => res.send(hobbies))
        .catch(err => console.log(err));
};

