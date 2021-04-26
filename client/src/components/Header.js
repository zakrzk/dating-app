import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import React, {useEffect, useState} from 'react';
import "../css/Header.css"
import {useLocation} from "react-router";

const jwt = require("jsonwebtoken");

export default function Header() {

    const location = useLocation();

    const tokenWrapper = JSON.parse(localStorage.getItem('JWT'))?.token
    const [jwtState, setJwtState] = useState(tokenWrapper ? jwt.verify(tokenWrapper, "my_jwt_secret") : null)

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('JWT'))?.token
        setJwtState(token ? jwt.verify(token, "my_jwt_secret") : null);
    }, [location.pathname])

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