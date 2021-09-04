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
import { Link } from "react-router-dom";
import SimpleCard from './SimpleCard';
import { useState } from 'react';
import NavbarBoard from './NavbarBoard';
import Modal from 'react-modal';
import './createBoard.css';
import FooterCb from './FooterCb';

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
        width: '100%', 
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: "abcd",
  },
};


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
Modal.setAppElement('#root');

export default function CreateBoard(history) {
    const classes = useStyles();
    const [toggle, setToggle] = useState(false);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
    return (
        <>
        <NavbarBoard />
        <Container component="main" maxWidth="xs" style={{paddingBottom: "60px"}}>
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
                    <AddButton variant="contained" color="primary" className={classes.submit} fullWidth style={{borderRadius: 14}} onClick={openModal}>
                        <AddCircleIcon />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CREATE BOARD 
                    </AddButton>
                    
                </form>
            </div>
            <Box mt={5}>
                <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        overlayClassName={"overlay"}
      >
              <SimpleCard />
              <Link to="/kanban" style={{ textDecoration: 'none' }}>
              <ColorButton variant="contained" color="primary" className={classes.submit} fullWidth style={{borderRadius: 14, height: "30px"}} onClick={closeModal}>
                        SET BACKGROUND
                    </ColorButton>
                </Link>
              </Modal>
            </Box>
        </Container>
        <FooterCb />
        </>
    );
}