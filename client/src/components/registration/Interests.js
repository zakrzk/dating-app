import "../../css/registration/Interests.css"

import React, {Component} from 'react';
import {FormLabel} from "@material-ui/core";
import Hobby from "./Hobby";
import {interests} from './HobbiesData'

export class Interests extends Component {

    render() {
        return (
            <div>
                <FormLabel component="legend" style={{padding: '8px 0'}}>
                    Select your favourites
                </FormLabel>

                {Object.keys(interests).map((categoryName, index) => (
                    <div key={index}>
                        <FormLabel component="legend"
                                   style={{
                                       padding: '8px 0',
                                       fontSize: '16px',
                                       textTransform: 'capitalize'
                                   }}>
                            {categoryName}
                        </FormLabel>
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