import "../css/Card.css"

import React, {Component, useEffect, useState} from 'react';
import TinderCard from 'react-tinder-card';
import {serverHost} from "./Register";
const jwt = require("jsonwebtoken");


function Card() {

    const [users, setUsers] = useState([]);
    const token = JSON.parse(localStorage.getItem('JWT'))?.token;
    let bearer = 'Bearer ' + token;

    useEffect(() => {
        // fetch users from api
        fetch("//" + serverHost + ":3006" + "/matches", {
            method: 'GET',
            headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
            .then(data => data.json())
            .then(data => {
                    setUsers(data)
                }
            )
            .catch(err => {
                console.log(err);
            })
    }, []);




    return (

        <div style={{marginTop: "7vh"}}>

            <div className="card__wrapper">
                {users.map(user => (
                    user.matchScore ?
                    <TinderCard
                        preventSwipe={['down', 'up']}
                        className="card swipe"
                        key={user._id}
                    >
                        <div className="wrapper">
                            <div className="card__level">
                                <h5>{user.profession}</h5>
                                {user.matchScore}%
                            </div>
                            <div className="card__name">
                                <h4>{user.firstName}, {user.age}</h4>
                            </div>
                        </div>

                    </TinderCard> : null
                ))}
            </div>
        </div>

    );
}

export default Card;