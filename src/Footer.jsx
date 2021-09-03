import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Logo from './Lifesavers Blood bag.png';
import { useState } from 'react';


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
        backgroundColor: '#29293A',
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
            <LogOutButton lg={2} style={{padding: "10px"}}>Your Boards</LogOutButton>
          <Typography variant="h6" className={classes.title} align="center">
            {props.AppTitle}
          </Typography>
            <LogOutButton lg={2}>Log out</LogOutButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}