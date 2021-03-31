import React from 'react';
import {Checkbox, FormControlLabel} from "@material-ui/core";


function OrientationOption(props) {

    return (
        <>
            <FormControlLabel
                style={{width: 'calc(100% * (1/2) - 10px - 1px)'}}
                value="end"
                control={
                    <Checkbox
                        inputProps={{'aria-label': props.value}}
                        color="primary"

                    />}
                label={props.label}
                labelPlacement="end"
            />
        </>
    );
}

export default OrientationOption;