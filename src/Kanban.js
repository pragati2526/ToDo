import React from 'react'
import Title from './Title.js';
import {Container,Row,Col} from 'react-bootstrap';
import './ToDoStyle.css';

export default function Kanban() {
    return (
        <Container fluid style={{backgroundColor:"#4D4D5C",padding:"30px"}} >
            <Row className='mx-auto'>
                <Col xs={12}  md={4}className=''><Title title="ToDo"/></Col>
                <Col xs={12}  md={4} className='justify-content-center'><Title title="Doing"/></Col>
                <Col xs={12}  md={4} className='justify-content-center'><Title title="Done"/></Col>
            </Row>
        </Container>
    )
}
