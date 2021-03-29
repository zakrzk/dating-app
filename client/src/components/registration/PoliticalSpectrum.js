import "../../css/registration/PoliticalSpectrum.css"

import React, {Component} from 'react';
import {FormLabel, Slider} from "@material-ui/core";



const marks = {
    economics : [
            {
                value: -5,
                label: 'Equality',
            },
            {
                value: 5,
                label: 'Markets',
            }
    ],
    diplomatic : [

        {
            value: -5,
            label: 'Nation',
        },
        {
            value: 5,
            label: 'World',
        }
    ],
    civil : [

        {
            value: -5,
            label: 'Liberty',
        },
        {
            value: 5,
            label: 'Authority',
        }
    ],
    societal : [

        {
            value: -5,
            label: 'Tradition',
        },
        {
            value: 5,
            label: 'Progress',
        }
    ]
}

function valuetext(value) {
    return `${value}°C`;
}


export class PoliticalSpectrum extends Component {

    render() {
        return (
            <div>


                <FormLabel component="legend" style={{padding: '8px 0'}}>
                   Your political spectrum
                </FormLabel>

                <h4>Economic Axis</h4>
                <Slider
                    defaultValue={0}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-custom"
                    step={1}
                    min={-5}
                    max={5}
                    marks={marks.economics}
                    style={{marginBottom: '60px'}}
                />

                <h4>Diplomatic Axis</h4>
                <Slider
                    defaultValue={0}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-custom"
                    step={1}
                    min={-5}
                    max={5}
                    marks={marks.diplomatic}
                    style={{marginBottom: '60px'}}

                />

                <h4>Civil Axis</h4>
                <Slider
                    defaultValue={0}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-custom"
                    step={1}
                    min={-5}
                    max={5}
                    marks={marks.civil}
                    style={{marginBottom: '60px'}}

                />

                <h4>Societal Axis</h4>
                <Slider
                    defaultValue={0}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-custom"
                    step={1}
                    min={-5}
                    max={5}
                    marks={marks.societal}
                    style={{marginBottom: '60px'}}

                />


            </div>

        );
    }
}