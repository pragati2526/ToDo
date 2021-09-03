import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './LogStyle.css';
import { withStyles } from '@material-ui/core/styles';
import Logo from './Lifesavers Blood bag.png';
import { Link as LinkRouter} from "react-router-dom";
function Copyright() {
    return (
        <Typography variant="body2" color="#C5C5C5" align="center" style ={{ color: "#C5C5C5"}}>
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                DnD's Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    '@global': {
        body: {
            backgroundColor: "#4D4D5C"
        }
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        color: "#FFFFFF",
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
const ColorButton = withStyles((theme) => ({
    root: {
        color: '#FFFFFF',   
        backgroundColor: '#EA7F7F',
        '&:hover': {
            backgroundColor: '#F05F5F',
        },
    },
}))(Button);

const WhiteTextTypography = withStyles({
    root: {
        color: "#FFFFFF"
    }
})(Typography);

export default function SignIn() {
    const classes = useStyles();

    return (
        <>
        <img src={Logo} alt="logo" />
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            
            <div className={classes.paper}>
                
                   <svg width="113" height="109" viewBox="0 0 113 109" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M56.5 0C25.8713 0 0 24.9556 0 54.5C0 84.0444 25.8713 109 56.5 109C87.1286 109 113 84.0444 113 54.5C113 24.9556 87.1286 0 56.5 0ZM56.5 27.25C66.2575 27.25 73.45 34.1824 73.45 43.6C73.45 53.0176 66.2575 59.95 56.5 59.95C46.7481 59.95 39.55 53.0176 39.55 43.6C39.55 34.1824 46.7481 27.25 56.5 27.25ZM27.6511 80.5074C32.7192 73.3134 41.1716 68.5174 50.85 68.5174H62.15C71.8341 68.5174 80.2809 73.3134 85.3489 80.5074C78.1282 87.963 67.8848 92.65 56.5 92.65C45.1152 92.65 34.8718 87.963 27.6511 80.5074Z" fill="#FA9292"/>
</svg>

                
                <WhiteTextTypography component="h1" variant="h5" >
                    LOG IN
                </WhiteTextTypography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        className="box"
                        style={{borderRadius: 15}}
                    />
                    <TextField
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        floatingLabelStyle={{ backgroundColor: '#FFFFFF' }}
                        className="box"
                        style={{borderRadius: 15}}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" style ={{ color: "#FFF"}} />}
                        label="Remember me"
                    />
                    <LinkRouter to="/createboard" style={{ textDecoration: 'none' }}>
                    <ColorButton variant="contained" color="primary" className={classes.submit} fullWidth style={{borderRadius: 20}}>
                        Sign in
                    </ColorButton>
                    </LinkRouter>
                   
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2" color="inherit">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <LinkRouter to="/signup">
                                <Link href="#" variant="body2" color="#FFFFFF" style ={{ color: "#FFF"}}>
                                {"Don't have an account? Sign Up"}
                                </Link>
                            </LinkRouter>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
        </>
    );
}