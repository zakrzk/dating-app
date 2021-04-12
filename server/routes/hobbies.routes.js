import {Router} from 'express';
import {body, header} from 'express-validator';
import {getHobby, addHobby} from '../controllers/hobby.controller';
import {isLogged} from "../middleware/isLogged.middleware";

const router = Router();

router.post('/add', [
    body('value')
        .isString()
        .trim()
        .isLength({min: 1, max: 255})
    ,
    header('Authentication')
        .exists(),
    isLogged,
], addHobby);


router.get('/feed', [
    header('Authentication')
        .exists(),
    isLogged
], getHobby);


module.exports = router;