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
import {Redirect} from "react-router";

export let serverHost = process.env.REACT_APP_SERVER_HOST || "https://dating-app-fyp.codes";

export default function Register() {


    let [submitted, setSubmitted] = useState(false);
    let [errors, setErrors] = useState([]);

    const [gender, setGender] = React.useState('default');
    const handleGenderChange = (event) => {
        setGender(event.target.value);

    };

    const interests = {};
    const politics = {};
    const orientation = {};


    const {register, handleSubmit, watch, control, setValue} = useForm();
    const onSubmit = data => {
        const allData = {...data, interests, orientation, politics};

        console.log(JSON.stringify({
            firstName: allData.name,
            email: allData.email,
            passwordHash: allData.password,
            age: parseInt(allData.age, 10),
            gender: allData.gender,
            orientation: Object.keys(allData.orientation),
            profession: allData.profession,
            hobbies: Object.keys(allData.interests),
            politicalEconomics: allData.politics.economics,
            politicalDiplomatic: allData.politics.diplomatic,
            politicalCivil: allData.politics.civil,
            politicalSocietal: allData.politics.societal
        }));


        fetch("//" + serverHost + ":3006" + "/users", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                firstName: allData.name,
                email: allData.email,
                passwordHash: allData.password,
                age: parseInt(allData.age, 10),
                gender: allData.gender,
                orientation: Object.keys(allData.orientation),
                profession: allData.profession,
                hobbies: Object.keys(allData.interests),
                politicalEconomics: allData.politics.economics,
                politicalDiplomatic: allData.politics.diplomatic,
                politicalCivil: allData.politics.civil,
                politicalSocietal: allData.politics.societal
            })
        })
            .then(data => data.json())
            .then(data => {
                    if (data.error) {
                        console.log(2);
                        console.log(data)
                        setErrors(data.message)
                    } else {
                        console.log(3);
                        setSubmitted(true)
                    }
                }
            )
            .catch(err => {
                console.log(err);
                setSubmitted(true)

            })
    }

    return (
        <Container component="main" maxWidth="xs">
            <div className="register__paper">
                <Avatar className="register__avatar">
                    <CreateIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up now
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
                    let the algorithm do its magic ✨
                </Typography>

                <form className="register__form" noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                inputRef={register}
                                name="name"
                                defaultValue=""
                            />
                        </Grid>
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

                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                type="number"
                                id="age"
                                label="Age"
                                name="age"
                                autoComplete="age"
                                inputRef={register}
                                defaultValue=""
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Controller
                                as={
                                    <Select
                                        variant="outlined"
                                        style={{width: '100%'}}
                                        labelId="gender-select"
                                        defaultValue="default"
                                    >
                                        <MenuItem disabled value="default">Select gender</MenuItem>
                                        {genderOptions.standard.map((gender, index) => (
                                            <MenuItem key={index} value={gender.value}>{gender.label}</MenuItem>
                                        ))}
                                    </Select>
                                }
                                name="gender"
                                control={control}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <ShowMe
                                onClick={(name, value) => {
                                    orientation[name] = value
                                }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="profession"
                                label="Profession"
                                name="profession"
                                inputProps={{ref: register}}
                                defaultValue=""
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Interests
                                onClick={(name, value) => {
                                    interests[name] = value
                                }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <PoliticalSpectrum
                                onClick={(name, value) => {
                                    politics[name] = value
                                }}
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
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>

                {errors.length > 1 ? errors.map((err, index) => (
                    <p style={{color: 'red'}} key={index}>{Object.values(err.constraints)}</p>
                )) : null}

            </div>
            {submitted === true ? <Redirect to="/success"/> : null}
        </Container>

    );
}