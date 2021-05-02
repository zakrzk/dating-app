import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import '../css/Register.css';
import {useForm, Controller} from "react-hook-form";
import {Redirect, useHistory} from "react-router";
import {serverHost} from "./Register";


export default function Login() {

    const history = useHistory();
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [jwt, setJwt] = useState({});
    const {register, handleSubmit, watch, errors, control, setValue} = useForm();

    const onSubmit = data => {
        const loginData = {...data}

        console.log(data)

        fetch("//" + serverHost + ":3006" + "/users", {
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
            .then(function (response) {
                return response.json();
            }).then(function (data) {
            if (data.err) {
                setError(data.err)
            }
            if (data.userId && data.token) {
                localStorage.setItem('JWT', JSON.stringify({userId: data.userId, token: data.token}));
                setJwt({userId: data.userId, token: data.token})
                setSubmitted(true)
                history.push('/browse');
            }
        })
            .catch(console.log)
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

                {error ? <p style={{color: 'red'}}>{error}</p> : null}
            </div>

            {/*{submitted === true ? <Redirect to="/browse"/> : null}*/}
        </Container>

    );
}