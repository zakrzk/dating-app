import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import {genderOptions} from 'gender-options';
import {MenuItem, Select} from "@material-ui/core";
import Interests from "./registration/Interests";
import '../css/Register.css';
import ShowMe from "./registration/ShowMe";
import PoliticalSpectrum from "./registration/PoliticalSpectrum";
import {useForm, Controller} from "react-hook-form";
import { Redirect } from "react-router";


export default function Login() {

    const [submitted, setSubmitted] = useState(false);
    const {register, handleSubmit, watch, errors, control, setValue} = useForm();

    const onSubmit = data => {
        const loginData = {...data}

        console.log(data)

        fetch('http://localhost:3006/users/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: loginData.email,
                password: loginData.password,
            })
        })
            .catch(console.log)
        console.log(loginData.email)
        console.log(loginData.password)

        setSubmitted(true)


    }

    return (
        <Container component="main" maxWidth="xs">
            <div className="register__paper">
                <Avatar className="register__avatar">
                    <CreateIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Typography
                    component="h6"
                    variant="h6"
                    style={{
                        color: '#a5a5a5',
                        fontStyle: 'italic',
                        fontSize: '12pt',
                        paddingTop: '5px'
                    }}
                >
                    check your matches ✨
                </Typography>

                <form className="register__form" noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                inputRef={register}
                                name="email"
                                defaultValue=""
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                inputRef={register}
                                defaultValue=""
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{marginTop: "2em", marginBottom: "2em"}}
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
            {submitted === true ? <Redirect to="/" /> : null  }
        </Container>

    );
}