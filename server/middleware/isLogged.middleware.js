import * as jwt from 'jsonwebtoken';
import {validationResult} from "express-validator";

export const isLogged = (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(401).json({err: errors, message: 'Missing token. User not logged in.'})
    }

    const token = req.get('Authentication').split(' ')[1];
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        return res.status(500).json({
            error: err.message,
            message: 'Could not decode token.'
        })
    }
    if (!decodedToken) {
        return res.status(401).json({
            message: 'Not logged in'
        })
    }
    req.userId = decodedToken.userId;
    next();
};