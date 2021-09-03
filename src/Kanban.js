import React from 'react'
import Title from './Title.js';
import {Container,Row,Col} from 'react-bootstrap';
import './ToDoStyle.css';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBarBoard from './NavBarBoard';
export default function Kanban() {
    const useStyles = makeStyles((theme) => ({
    '@global': {
        body: {
            backgroundColor: "#4D4D5C"
        }
    },
    
}));
const classes = useStyles();
    return (
        <>
        <NavBarBoard />
        <Container fluid>
            <CssBaseline />
            <Row className='mx-auto' style={{paddingTop: '20px'}}>
                <Col xs={12}  md={4}className=''><Title title="ToDo"/></Col>
                <Col xs={12}  md={4} className='justify-content-center'><Title title="Doing"/></Col>
                <Col xs={12}  md={4} className='justify-content-center'><Title title="Done"/></Col>
            </Row>
        </Container>
        </>
    )
}