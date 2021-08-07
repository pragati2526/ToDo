import React from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './LogStyle.css';
import { withStyles } from '@material-ui/core/styles';
import Logo from './Lg.png';
import { Link as LinkRouter} from "react-router-dom";
import SimpleCard from './SimpleCard';

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
        height: 50, 
        fontSize: 20, 
        backgroundColor: '#EA7F7F',
        '&:hover': {
            backgroundColor: '#F05F5F',
        },
    },
}))(Button);
const AddButton = withStyles((theme) => ({
    root: {
        color: '#DA4848',  
        height: 50, 
        fontSize: 20,
        backgroundColor: '#FFFFFF',
        '&:hover': {
            backgroundColor: '#FCDADA',
        },
    },
}))(Button);

const WhiteTextTypography = withStyles({
    root: {
        color: "#FFFFFF"
    }
})(Typography);

export default function CreateBoard() {
    const classes = useStyles();

    return (
        <>
        
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            
            <div className={classes.paper}>
                
                  
                <WhiteTextTypography component="h1" variant="h3" style={{marginBottom: 10}}>
                    YOUR BOARDS
                </WhiteTextTypography>
                <form className={classes.form} noValidate>
            
                    
                    <ColorButton variant="contained" color="primary" className={classes.submit} fullWidth style={{borderRadius: 14}}>
                        BOARD 1
                    </ColorButton>
                    <ColorButton variant="contained" color="primary" className={classes.submit} fullWidth style={{borderRadius: 14}}>
                        BOARD 2
                    </ColorButton>
                    <ColorButton variant="contained" color="primary" className={classes.submit} fullWidth style={{borderRadius: 14}}>
                        BOARD 3
                    </ColorButton>
                    <AddButton variant="contained" color="primary" className={classes.submit} fullWidth style={{borderRadius: 14}}>
                        <AddCircleIcon />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CREATE BOARD 
                    </AddButton>
                    
                </form>
            </div>
            <Box mt={5}>
              <SimpleCard />
            </Box>
        </Container>
        </>
    );
}