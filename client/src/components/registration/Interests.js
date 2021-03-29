import "../../css/registration/Interests.css"

import React, {Component} from 'react';
import {FormLabel} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Hobby from "./Hobby";
import {interests} from './HobbiesData'

export class Interests extends Component {

    render() {
        return (
            <div>
                <FormLabel component="legend" style={{padding: '8px 0'}}>Select your hobbies</FormLabel>

                {Object.keys(interests).map((categoryName, index)=> (
                    <div key={index}>
                        <Typography
                            style={{textTransform: 'capitalize'}}
                            variant="h6"
                            key={categoryName}
                            component="h6"> {categoryName}
                        </Typography>
                        <div
                            key={index}
                            className="interests__group">
                            {interests[categoryName].map(hobby => (
                                <Hobby
                                    key={hobby['label']}
                                    symbol={hobby['symbol']}
                                    label={hobby['label']}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        );
    }
}