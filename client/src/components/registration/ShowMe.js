import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import '../../css/registration/ShowMe.css';
import ShowMeOption from "./ShowMeOption";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    }
}));

function ShowMe() {

    return (
        <div style={{display:'flex'}}>

            <FormControl required error={null} component="fieldset">
                <FormLabel >Show me</FormLabel>
                <FormGroup>
                    <ShowMeOption
                        name="xd" />
                </FormGroup>
                <FormHelperText>Choose at least one</FormHelperText>
            </FormControl>
        </div>
    );
}
export default ShowMe;