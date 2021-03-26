import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';

import "../css/Header.css"

import React, {Component} from 'react';

export class Header extends Component {
    render() {
        return (
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

        );
    }
}