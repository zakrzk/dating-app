import React, {Component, useRef} from 'react';
import {Chip} from "@material-ui/core";
import Emoji from "a11y-react-emoji";


function Hobby (props) {
    const inputEl = useRef(null)

    const handleClick = (event) => {
        inputEl.current.style.backgroundColor = 'lightGreen'
        console.log(event.target)
        console.log( inputEl.current)
    };
        return (
            <div className="interests__chip">
                <Chip
                    ref={inputEl}
                    icon={<Emoji className="interests__emoji" symbol={props.symbol} label={props.label}/>}
                    label={props.label}
                    clickable
                    onClick={handleClick}
                    style={{textTransform: 'capitalize'}}
                />
            </div>

        );
}

export default Hobby;