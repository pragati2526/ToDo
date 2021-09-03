import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Logo from './Lifesavers Blood bag.png';
import { useState } from 'react';
import {Link} from 'react-router-dom';

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
const [toggle, setToggle] = useState(false);
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{background: '#4D4D5C'}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={Logo} alt="logo" width="70%" />
          </IconButton>
          <Typography variant="h6" className={classes.title} align="center">
            {props.AppTitle}
          </Typography>
          <Col lg={2} style={{border: "2px solid", padding:"13px", paddingBottom:"1px",paddingTop: "3px"}}>
          <Row align="center">
              <Button color="inherit" onClick={() => setToggle((!toggle))}>
              <Typography variant="h7" className={classes.title} align="center">
                  <svg width="43" height="39" viewBox="0 0 113 109" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M56.5 0C25.8713 0 0 24.9556 0 54.5C0 84.0444 25.8713 109 56.5 109C87.1286 109 113 84.0444 113 54.5C113 24.9556 87.1286 0 56.5 0ZM56.5 27.25C66.2575 27.25 73.45 34.1824 73.45 43.6C73.45 53.0176 66.2575 59.95 56.5 59.95C46.7481 59.95 39.55 53.0176 39.55 43.6C39.55 34.1824 46.7481 27.25 56.5 27.25ZM27.6511 80.5074C32.7192 73.3134 41.1716 68.5174 50.85 68.5174H62.15C71.8341 68.5174 80.2809 73.3134 85.3489 80.5074C78.1282 87.963 67.8848 92.65 56.5 92.65C45.1152 92.65 34.8718 87.963 27.6511 80.5074Z" fill="#FA9292"/>
</svg> &nbsp;
            Username
          </Typography>
          </Button>
          </Row>
          {toggle && (<Link to="/signin" style={{ textDecoration: 'none' }}><Row style={{paddingTop: '3px'}}><LogOutButton>Log out</LogOutButton></Row></Link>)}
          </Col>
        </Toolbar>
      </AppBar>
    </div>
  );
}