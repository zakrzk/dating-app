import "../../css/registration/Interests.css"

import React, {Component} from 'react';
import Emoji from 'a11y-react-emoji'
import {Chip, FormControl, FormLabel} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const handleDelete = () => {
    console.info('You clicked the delete icon.');
};

const handleClick = (event) => {
    event.target.style.backgroundColor = 'green'
    console.log(event.target)
};


export class Interests extends Component {
    render() {
        return (
            <div>
                <FormLabel component="legend" style={{padding: '8px 0'}}>Select your hobbies</FormLabel>
                <div className="interests__group">
                    <Typography variant="h6" component="h6">
                        Sports
                    </Typography>
                    <div className="interests__chip">
                        <Chip
                            icon={<Emoji className="interests__emoji" symbol="⚽️" label="soccer"/>}
                            label="Soccer"
                            clickable
                            onClick={handleClick}
                            onDelete={handleDelete}
                        />
                    </div>

                    <div className="interests__chip">
                        <Chip
                            icon={<Emoji className="interests__emoji" symbol="⚾️️" label="baseball"/>}
                            label="Baseball"
                            clickable
                            onClick={handleClick}
                            onDelete={handleDelete}
                        />
                    </div>


                    <div className="interests__chip">
                        <Chip
                            icon={<Emoji className="interests__emoji" symbol="🏏️️️" label="cricket"/>}
                            label="Cricket"
                            clickable
                            onClick={handleClick}
                            onDelete={handleDelete}
                        />
                    </div>

                    <div className="interests__chip">
                        <Chip
                            icon={<Emoji className="interests__emoji" symbol="🏃‍♂️️" label="jogging"/>}
                            label="Jogging"
                            clickable
                            onClick={handleClick}
                            onDelete={handleDelete}
                        />
                    </div>

                    <div className="interests__chip">
                        <Chip
                            icon={<Emoji className="interests__emoji" symbol="⛷" label="ski"/>}
                            label="Ski"
                            clickable
                            onClick={handleClick}
                            onDelete={handleDelete}
                        />
                    </div>

                    <div className="interests__chip">
                        <Chip
                            icon={<Emoji className="interests__emoji" symbol="⛳️️️" label="golf"/>}
                            label="Golf"
                            clickable
                            onClick={handleClick}
                            onDelete={handleDelete}
                        />
                    </div>

                    <div className="interests__chip">
                        <Chip
                            icon={<Emoji className="interests__emoji" symbol="🏉" label="rugby"/>}
                            label="Rugby"
                            clickable
                            onClick={handleClick}
                            onDelete={handleDelete}
                        />
                    </div>

                    <div className="interests__chip">
                        <Chip
                            icon={<Emoji className="interests__emoji" symbol="🏊‍" label="swimming"/>}
                            label="Swimming"
                            clickable
                            onClick={handleClick}
                            onDelete={handleDelete}
                        />
                    </div>

                    <div className="interests__chip">
                        <Chip
                            icon={<Emoji className="interests__emoji" symbol="🤺‍" label="fencing"/>}
                            label="Fencing"
                            clickable
                            onClick={handleClick}
                            onDelete={handleDelete}
                        />
                    </div>

                    <div className="interests__chip">
                        <Chip
                            icon={<Emoji className="interests__emoji" symbol="🎳" label="bowling"/>}
                            label="Bowling"
                            clickable
                            onClick={handleClick}
                            onDelete={handleDelete}
                        />
                    </div>

                    <div className="interests__chip">
                        <Chip
                            icon={<Emoji className="interests__emoji" symbol="🚲" label="cycling"/>}
                            label="Cycling"
                            clickable
                            onClick={handleClick}
                            onDelete={handleDelete}
                        />
                    </div>

                    <div className="interests__chip">
                        <Chip
                            icon={<Emoji className="interests__emoji" symbol="🧗" label="climbing"/>}
                            label="Climbing"
                            clickable
                            onClick={handleClick}
                            onDelete={handleDelete}
                        />
                    </div>
                </div>

                <div className="interests__group">

                    <Typography variant="h6" component="h6">
                        Knowledge
                    </Typography>

                    <div className="interests__chip">
                        <Chip
                            icon={<Emoji className="interests__emoji" symbol="🧲️" label="physics"/>}
                            label="Physics"
                            clickable
                            onClick={handleClick}
                            onDelete={handleDelete}
                        />
                    </div>

                    <div className="interests__chip">
                        <Chip
                            icon={<Emoji className="interests__emoji" symbol="🧬" label="biology"/>}
                            label="Biology"
                            clickable
                            onClick={handleClick}
                            onDelete={handleDelete}
                        />
                    </div>

                    <div className="interests__chip">
                        <Chip
                            icon={<Emoji className="interests__emoji" symbol="🧪" label="chemistry"/>}
                            label="Chemistry"
                            clickable
                            onClick={handleClick}
                            onDelete={handleDelete}
                        />
                    </div>

                    <div className="interests__chip">
                        <Chip
                            icon={<Emoji className="interests__emoji" symbol="➗" label="math"/>}
                            label="Math"
                            clickable
                            onClick={handleClick}
                            onDelete={handleDelete}
                        />
                    </div>

                    <div className="interests__chip">
                        <Chip
                            icon={<Emoji className="interests__emoji" symbol="➗" label="math"/>}
                            label="Math"
                            clickable
                            onClick={handleClick}
                            onDelete={handleDelete}
                        />
                    </div>

                    <div className="interests__chip">
                        <Chip
                            icon={<Emoji className="interests__emoji" symbol="🌽" label="corn"/>}
                            label="Nutrition"
                            clickable
                            onClick={handleClick}
                            onDelete={handleDelete}
                        />
                    </div>

                    <div className="interests__chip">
                        <Chip
                            icon={<Emoji className="interests__emoji" symbol="🏛" label="history"/>}
                            label="History"
                            clickable
                            onClick={handleClick}
                            onDelete={handleDelete}
                        />
                    </div>

                    <div className="interests__chip">
                        <Chip
                            icon={<Emoji className="interests__emoji" symbol="🗓" label="business"/>}
                            label="Business"
                            clickable
                            onClick={handleClick}
                            onDelete={handleDelete}
                        />
                    </div>
                </div>
                <div className="interests__group">

                    <Typography variant="h6" component="h6">
                        Arts
                    </Typography>

                    <div className="interests__chip">
                        <Chip
                            icon={<Emoji className="interests__emoji" symbol="🎨" label="Painting"/>}
                            label="Painting"
                            clickable
                            onClick={handleClick}
                            onDelete={handleDelete}
                        />
                    </div>

                    <div className="interests__chip">
                        <Chip
                            icon={<Emoji className="interests__emoji" symbol="👗" label="Fashion"/>}
                            label="Fashion"
                            clickable
                            onClick={handleClick}
                            onDelete={handleDelete}
                        />
                    </div>

                    <div className="interests__chip">
                        <Chip
                            icon={<Emoji className="interests__emoji" symbol="🎭" label="Theater"/>}
                            label="Fashion"
                            clickable
                            onClick={handleClick}
                            onDelete={handleDelete}
                        />
                    </div>

                    <div className="interests__chip">
                        <Chip
                            icon={<Emoji className="interests__emoji" symbol="🕺" label="Dance"/>}
                            label="Dance"
                            clickable
                            onClick={handleClick}
                            onDelete={handleDelete}
                        />
                    </div>

                    <div className="interests__chip">
                        <Chip
                            icon={<Emoji className="interests__emoji" symbol="✍✍🏿️" label="Writing"/>}
                            label="Writing"
                            clickable
                            onClick={handleClick}
                            onDelete={handleDelete}
                        />
                    </div>

                    <div className="interests__chip">
                        <Chip
                            icon={<Emoji className="interests__emoji" symbol="🥠️" label="Cooking"/>}
                            label="Cooking"
                            clickable
                            onClick={handleClick}
                            onDelete={handleDelete}
                        />
                    </div>

                    <div className="interests__chip">
                        <Chip
                            icon={<Emoji className="interests__emoji" symbol="🪚️" label="DYI"/>}
                            label="DYI"
                            clickable
                            onClick={handleClick}
                            onDelete={handleDelete}
                        />
                    </div>
                </div>
            </div>

        );
    }
}