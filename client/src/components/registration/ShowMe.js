import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import '../../css/registration/ShowMe.css';
import OrientationOption from "./OrientationOption";
import {genderOptions} from 'gender-options';
import Hobby from "./Hobby";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    }
}));

function ShowMe(props) {

    return (
        <div >
            <FormControl required error={null} component="fieldset" >
                <FormLabel >Show me</FormLabel>
                <FormGroup style={{
                    flexDirection:'row',
                    marginLeft: '10px'
                }}
                >

                    {genderOptions.standard.map(gender => (
                        <OrientationOption
                            key={gender.value}
                            value={gender.value}
                            label={gender.label}
                            onClick={props.onClick}
                        />
                    ))}

                </FormGroup>
                <FormHelperText>Choose at least one</FormHelperText>
            </FormControl>
        </div>
    );
}
export default ShowMe;