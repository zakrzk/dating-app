import React from 'react';
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
import {Interests} from "./registration/Interests";
import '../css/Register.css';
import ShowMe from "./registration/ShowMe";
import {PoliticalSpectrum} from "./registration/PoliticalSpectrum";


export default function Register() {

    const name = "";
    const [gender, setGender] = React.useState('default');
    const handleGenderChange = (event) => {
        setGender(event.target.value);

    };

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
                <form className="register__form" noValidate onSubmit={null}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="name"
                                name="name"
                                variant="outlined"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
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
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Select
                                variant="outlined"
                                style={{width: '100%'}}
                                labelId="gender-select"
                                id="gender-select"
                                value={gender}
                                onChange={handleGenderChange}
                            >
                                <MenuItem disabled value="default">Select gender</MenuItem>
                                {genderOptions.standard.map(gender => (
                                    <MenuItem key={gender} value={gender.value}>{gender.label}</MenuItem>
                                ))}
                            </Select>
                        </Grid>

                        <Grid item xs={12}>

                            <ShowMe/>

                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="profession"
                                label="Profession"
                                name="profession"
                                autoComplete="profession"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Interests/>
                        </Grid>

                        <Grid item xs={12}>
                            <PoliticalSpectrum/>
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
            </div>
        </Container>
    );
}