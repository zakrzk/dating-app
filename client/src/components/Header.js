import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import React, {Component, useEffect, useState} from 'react';
import "../css/Header.css"

const jwt = require("jsonwebtoken");


export default function Header() {
    const [jwtState, setJwtState] = useState(false);
    useEffect(() => {
        setJwtState(jwt.decode(JSON.parse(localStorage.getItem('JWT'))))
    }, [jwtState]);


    return (
        <div>
            {jwtState ? `You are logged in as: ${jwtState.email}` : "You're not logged in."}

            <div className="header">
                <IconButton>
                    <SettingsIcon className="header__settingsIcon"/>
                </IconButton>
                <IconButton>
                    <FavoriteIcon className="header__logoIcon"/>
                </IconButton>
                <IconButton>
                    <CommentIcon className="header__chatIcon"/>
                </IconButton>
            </div>
        </div>

    );
}