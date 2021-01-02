import {TestMessage} from "../models/testMessage.model.js";

export const getTestMessage = (req, res) => {

    TestMessage.findAll()
        .then(testMessages => res.json(testMessages))
        .catch(err => console.log(err));
};