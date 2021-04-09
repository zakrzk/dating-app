import React, {useRef} from 'react';
import {Chip} from "@material-ui/core";
import Emoji from "a11y-react-emoji";

function Hobby(props) {
    const inputEl = useRef(null)

    const handleClick = (event) => {
        const attribute = Boolean (inputEl.current.getAttribute('isclicked'));
        if (attribute) {
            inputEl.current.removeAttribute('isclicked');
            inputEl.current.style.backgroundColor = '#e0e0e0'
            inputEl.current.style.color = 'rgba(0, 0, 0, 0.87)'
        } else {
            inputEl.current.setAttribute('isclicked', "true");
            inputEl.current.style.backgroundColor = '#87d37c'
            inputEl.current.style.color = '#fafafa'
        }
        props.onClick(props.label,  !attribute)

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