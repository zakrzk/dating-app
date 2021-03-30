import React, {useRef} from 'react';
import {Checkbox, FormControlLabel} from "@material-ui/core";


function ShowMeOption(props) {

    const [state, setState] = React.useState({
        xd: false
    });


    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    const { xd } = state;

    return (
        <FormControlLabel
            control={<Checkbox checked={xd} onChange={handleChange} name={props.name} />}
            label={props.name}
        />
    );
}

export default ShowMeOption;