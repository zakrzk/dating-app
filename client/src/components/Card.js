import "../css/Card.css"

import React, {Component, useState} from 'react';
import TinderCard from 'react-tinder-card';


function Card() {

    const [users, setUsers] = useState([
        {
            id: 1,
            name: "John",
            age: 20,
            level: 90
        },
        {
            id: 2,
            age: 20,
            name: "Monica",
            level: 55
        },
        {
            id: 3,
            age: 20,
            name: "Gambrysiaaaa",
            level: 100
        },
    ]);


    return (

        <div style={{marginTop: "7vh"}}>

            <div className="card__wrapper">
                {users.map(user => (
                    <TinderCard
                        preventSwipe={['down', 'up']}
                        className="card swipe"
                        key={user.id}
                    >
                        <div className="wrapper">
                            <div className="card__level">
                                <h2>{user.level}</h2>
                            </div>
                            <div className="card__name">
                                <h2>{user.name}</h2>
                            </div>
                        </div>

                    </TinderCard>
                ))}
            </div>
        </div>

    );
}

export default Card;