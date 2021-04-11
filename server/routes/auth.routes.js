import {Router} from 'express';
import {postRegisterUser} from "../controllers/auth.controller";

import {body} from 'express-validator';
import {User} from "../models/user.model";

const router = Router();

router.post('/register', [
        body('email')
            .isEmail()
            .withMessage("Email not valid")
            .bail()
            .normalizeEmail()
            .custom((value) => {
                return User.findOne({where: {email: value}})
                    .then(user => {
                        if (user) return Promise.reject()
                    })
            })
            .withMessage('Email already registered.'),
        body('password')
            .exists(),
        body('passwordConfirmation')
            .withMessage('Password and password confirmation must be the same.'),
        body('name')
            .exists()
            .withMessage('Name must not be empty.'),
        body('description')
            .isLength({max: 128})
    ],
    postRegisterUser);

module.exports = router;