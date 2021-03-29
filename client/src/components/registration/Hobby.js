import "../../css/Footer.css"

import React, {Component} from 'react';
import {Chip} from "@material-ui/core";
import Emoji from "a11y-react-emoji";

const handleDelete = () => {
    console.info('You clicked the delete icon.');
};

const handleClick = (event) => {
    event.target.style.backgroundColor = 'lightGreen'
    console.log(event.target)
};

export class Hobby extends Component {
    render() {
        return (
            <div className="interests__chip">
                <Chip
                    icon={<Emoji className="interests__emoji" symbol={this.props.symbol} label={this.props.label}/>}
                    label={this.props.label}
                    clickable
                    onClick={handleClick}
                />
            </div>

        );
    }
}