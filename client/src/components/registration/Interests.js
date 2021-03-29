import "../../css/registration/Interests.css"

import React, {Component} from 'react';
import Emoji from 'a11y-react-emoji'
import {Chip, FormControl, FormLabel} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {Hobby} from "./Hobby";
import {interest} from './HobbiesData'

const handleDelete = () => {
    console.info('You clicked the delete icon.');
};

const handleClick = (event) => {
    event.target.style.backgroundColor = 'lightGreen'
    console.log(event.target)
};

export class Interests extends Component {
    render() {
        return (
            <div>
                <FormLabel component="legend" style={{padding: '8px 0'}}>Select your hobbies</FormLabel>

                <Typography variant="h6" component="h6">
                    Sports
                </Typography>
                <div className="interests__group">
                    {interest.sports.map(hobby => (
                        <Hobby symbol={hobby.symbol} label={hobby.label} />
                        ))}
                </div>

                <Typography variant="h6" component="h6">
                    Knowledge
                </Typography>
                <div className="interests__group">
                    <div className="interests__group">
                        {interest.knowledge.map(hobby => (
                            <Hobby symbol={hobby.symbol} label={hobby.label} />
                        ))}
                    </div>

                </div>
                <Typography variant="h6" component="h6">
                    Arts
                </Typography>
                <div className="interests__group">
                    <div className="interests__group">
                        {interest.arts.map(hobby => (
                            <Hobby symbol={hobby.symbol} label={hobby.label} />
                        ))}
                    </div>

                </div>
            </div>

        );
    }
}