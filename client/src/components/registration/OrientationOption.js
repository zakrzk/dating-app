import React, {useRef} from 'react';
import {Checkbox, Chip, FormControlLabel} from "@material-ui/core";


function OrientationOption(props) {
    const checkboxRef = useRef(null)
    const handleClick = (event) => {
        const attribute = Boolean (event.target.checked);
        props.onClick(props.label,  attribute)

    };
    return (
        <>
            <FormControlLabel
                style={{width: 'calc(100% * (1/2) - 10px - 1px)'}}
                value="end"
                control={
                    <Checkbox
                        ref={checkboxRef}
                        inputProps={{'aria-label': props.value}}
                        color="primary"
                        onClick={handleClick}

                    />}
                label={props.label}
                labelPlacement="end"
            />
        </>
    );
}

export default OrientationOption;