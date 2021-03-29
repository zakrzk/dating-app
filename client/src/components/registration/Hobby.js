import React, {Component, useRef} from 'react';
import {Chip} from "@material-ui/core";
import Emoji from "a11y-react-emoji";

function Hobby(props) {
    const inputEl = useRef(null)

    const handleClick = (event) => {
        const attribute = inputEl.current.getAttribute('isclicked');
        if (attribute === 'true') {
            inputEl.current.setAttribute('isclicked', "false");
            inputEl.current.style.backgroundColor = '#e0e0e0'
            inputEl.current.style.color = 'rgba(0, 0, 0, 0.87)'
        } else {
            inputEl.current.setAttribute('isclicked', "true");
            inputEl.current.style.backgroundColor = '#87d37c'
            inputEl.current.style.color = 'white'
        }
        console.log(event.target)
        console.log(inputEl.current)
    };
    return (
        <div className="interests__chip">
            <Chip
                ref={inputEl}
                isclicked="false"
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