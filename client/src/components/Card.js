import "../css/Card.css"

import React, {Component, useState} from 'react';
import TinderCard from 'react-tinder-card';


function Card() {

    const [users, setUsers] = useState([
        {
            id: 1,
            name: "John",
            level: 90
        },
        {
            id: 2,
            name: "Monica",
            level: 55
        },
        {
            id: 3,
            name: "Gambrysia",
            level: 100
        },
    ]);


    return (
        <div style={{marginTop: "80px",}}>
            {users.map(user => (
                <TinderCard
                    preventSwipe={['down', 'up']}
                    className="card swipe"
                    key={user.id}>

                    <div className="card">
                        <h2 className="card__name">{user.name}</h2>
                        <h2 className="card__level">{user.level}</h2>
                    </div>

                </TinderCard>
            ))}
        </div>

    );
}

export default Card;