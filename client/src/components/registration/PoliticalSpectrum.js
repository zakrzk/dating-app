import "../../css/registration/PoliticalSpectrum.css"

import React, {Component, useRef} from 'react';
import {Chip, FormLabel, Slider} from "@material-ui/core";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import Hobby from "./Hobby";

const marks = {
    economics: [
        {
            value: -5,
            label: 'Equality',
        },
        {
            value: 5,
            label: 'Markets',
        }
    ],
    diplomatic: [

        {
            value: -5,
            label: 'Nation',
        },
        {
            value: 5,
            label: 'World',
        }
    ],
    civil: [

        {
            value: -5,
            label: 'Liberty',
        },
        {
            value: 5,
            label: 'Authority',
        }
    ],
    societal: [

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


export default function PoliticalSpectrum(props) {

    const handleClick = (event) => {

        const value = Number (event.target.getAttribute('aria-valuenow'))
        let label = event.target.getAttribute('label');
        if (label) {
            label = event.target.getAttribute('label')
            props.onClick(label, value)
        }
        else {
            label = event.target.parentNode.attributes[1].nodeValue
            props.onClick(label, value)
        }
    };

        return (
            <div>
                <FormLabel component="legend" style={{padding: '8px 0'}}>
                    Your political spectrum
                </FormLabel>

                <h4>Economic Axis</h4>
                <p><FormatQuoteIcon/>Those with higher Equality scores believe the economy should distribute value evenly among the
                    populace. They tend to support progressive tax codes, social programs, and at high values,
                    socialism.</p>
                <p>Those with higher Market scores believe the economy should be focused on rapid growth. <br/> They
                    tend to
                    support lower taxes, privatization, deregulation, and at high values, laissez-faire capitalism.<FormatQuoteIcon/></p>
                <Slider
                    defaultValue={0}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-custom"
                    step={1}
                    min={-5}
                    max={5}
                    marks={marks.diplomatic}
                    style={{marginBottom: '60px'}}
                    onClick={handleClick}
                    label='economics'
                />

                <h4>Diplomatic Axis</h4>
                <p>Those with higher Nation scores are patriotic and nationalist. They often believe in an aggressive
                    foreign policy, valuing the military, strength, sovereignty, and at high values, territorial
                    expansion.
                </p>
                <p>Those with higher Globe scores are cosmopolitan and globalist. They often believe in a peaceful
                    foreign policy, emphasizing diplomacy, cooperation, integration, and at high values, a world
                    government.

                </p>

                <Slider
                    defaultValue={0}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-custom"
                    step={1}
                    min={-5}
                    max={5}

                    marks={marks.diplomatic}
                    style={{marginBottom: '60px'}}

                    onClick={handleClick}
                    label='diplomatic'

                />

                <h4>Civil Axis</h4>
                <p>Those with higher Liberty scores believe in strong civil liberties. They tend to support democracy
                    and oppose state intervention in personal lives. Note that this refers to civil liberties, not
                    economic liberties.
                </p>
                <p>Those with higher Authority scores believe in strong state power. They tend to support state
                    intervention in personal lives, government surveillance, and at high values, censorship or
                    autocracy.
                </p>
                <Slider
                    defaultValue={0}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-custom"
                    step={1}
                    onClick={handleClick}
                    min={-5}
                    max={5}
                    label='civil'
                    marks={marks.civil}
                    style={{marginBottom: '60px'}}

                />

                <h4>Societal Axis</h4>
                <p>Those with higher Tradition scores believe in traditional values and strict adherence to a moral code. Though not always, they are usually religious, and support the status quo or the status quo ante.
                </p>
                <p>Those with higher Progress scores believe in social change and rationality. Though not always, they are usually secular or atheist, and support environmental action and scientific or technological research.
                </p>
                <Slider
                    defaultValue={0}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-custom"
                    step={1}
                    label='societal'
                    min={-5}
                    onClick={handleClick}
                    max={5}
                    marks={marks.societal}
                    style={{marginBottom: '60px'}}

                />

                <p style={{fontSize: '11px', textAlign:'right'}}>Source of the definitions: <a rel="noreferrer" target="_blank" href="https://8values.github.io/">https://8values.github.io</a>
                </p>

            </div>

        );
}