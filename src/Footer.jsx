import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const LogOutButton = withStyles((theme) => ({
    root: {
        color: '#fff',  
        height: 30, 
        fontSize: 15,
        '&:hover': {
            backgroundColor: '#F05F5F',
        },
    },
}))(Button);


export default function ButtonAppBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{background: '#4D4D5C'}}>
        <Toolbar>
            <Link to="/createboard" style={{ textDecoration: 'none' }}><LogOutButton lg={2} style={{padding: "10px"}}>Your Boards</LogOutButton></Link>
          <Typography variant="h6" className={classes.title} align="center">
            {props.AppTitle}
          </Typography>
            <Link to="signin" style={{ textDecoration: 'none' }}><LogOutButton lg={2}>Log out</LogOutButton></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}