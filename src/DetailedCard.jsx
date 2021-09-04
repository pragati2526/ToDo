import React,{useState} from 'react'
import './ToDoStyle.css';
import {Container,Row,Col,Form,FloatingLabel,Button} from 'react-bootstrap';
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function DetailedCard({show, onClose, item }) {

    return (
        <Modal
        isOpen={show}
        onRequestClose={onClose}
        overlayClassName={"overlay"}
        style={{content:{
            width:"80%",
            margin:"auto",
            maxHeight:"600px"
        }}}
    >
            <Container fluid style={{ backgroundColor:'#F1F2FC',padding:'20px 10px',borderRadius:'25px',width:"100%"}}>
                <Row>
                    <Col xs={12}>
                    <FloatingLabel controlId="floatingTextarea2">
                            <Form.Control
                                as="textarea"
                                placeholder={item.title}
                                 style={{ width: '80%',border:'none',backgroundColor:'#FFFFFF',borderRadius:'10px',padding:'10px'}}
                            />
                    </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col xs={8}>
                        <h3 style={{color:'#4D4D5C'}}>Description :</h3>
                        <FloatingLabel controlId="floatingTextarea2">
                            <Form.Control
                                as="textarea"
                                placeholder="Details"
                                style={{ height: '300px',width:'90%',borderRadius:'10px',padding:'10px',border:'none'}}
                            />
                        </FloatingLabel>
                    </Col>
                    <Col xs={4}>
                        <Row style={{margin:"auto"}}>
                            <Col xs={12}>
                            <h4 style={{color:'#4D4D5C'}}>Add label</h4>
                            </Col>
                            <Col xs={12}>
                            <Row style={{margin:"auto"}}>
                                <Col xs={4}><Button style={{borderRadius:'30px',backgroundColor:'#FFC700',maxWidth: '32px',maxHeight: '11px',border: '1px solid #A2A3C1'}}></Button></Col>
                                <Col xs={4}><Button style={{borderRadius:'30px',backgroundColor:'#FF0505',maxWidth: '32px',maxHeight: '11px',border: '1px solid #A2A3C1'}}></Button></Col>
                                <Col xs={4}><Button style={{borderRadius:'30px',backgroundColor:'#90FF02',maxWidth: '32px',maxHeight: '11px',border: '1px solid #A2A3C1'}}></Button></Col>
                            </Row>
                            <Row style={{margin:"auto"}}>
                                <Col xs={4}><Button style={{borderRadius:'30px',backgroundColor:'#00FFA3',maxWidth: '32px',maxHeight: '11px',border: '1px solid #A2A3C1'}}></Button></Col>
                                <Col xs={4}><Button style={{borderRadius:'30px',backgroundColor:'#0057FF',maxWidth: '32px',maxHeight: '11px',border: '1px solid #A2A3C1'}}></Button></Col>
                                <Col xs={4}><Button style={{borderRadius:'30px',backgroundColor:'#680CFF',maxWidth: '32px',maxHeight: '11px',border: '1px solid #A2A3C1'}}></Button></Col>
                            </Row>
                            <Row style={{margin:"auto"}}>
                                <Col xs={4}><Button style={{borderRadius:'30px',backgroundColor:'#CF01F0',maxWidth: '32px',maxHeight: '11px',border: '1px solid #A2A3C1'}}></Button></Col>
                                <Col xs={4}><Button style={{borderRadius:'30px',backgroundColor:'#620000',maxWidth: '32px',maxHeight: '11px',border: '1px solid #A2A3C1'}}></Button></Col>
                                <Col xs={4}><Button style={{borderRadius:'30px',backgroundColor:'#555631',maxWidth: '32px',maxHeight: '11px',border: '1px solid #A2A3C1'}}></Button></Col>
                            </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <h3 style={{color:'#4D4D5C'}}>Due Date :</h3>
                            <br/>
                            <Row>
                                <Col xs={4}><h5 style={{color:'#291A81'}}>Start:</h5></Col>
                                <Col xs={8}>
                                    <FloatingLabel controlId="floatingTextarea2">
                                        <Form.Control
                                            as="textarea"
                                            placeholder="dd/mm/yyyy"
                                            style={{maxHeight:'30px',maxWidth:'120px',border:'none',backgroundColor:'#FFFFFF',padding:'5px'}}
                                        />
                                    </FloatingLabel>
                                </Col>

                                <Col xs={4}><h5 style={{color:'#291A81'}}>End:</h5></Col>
                                <Col xs={8}>
                                    <FloatingLabel controlId="floatingTextarea2">
                                        <Form.Control
                                            as="textarea"
                                            placeholder="dd/mm/yyyy"
                                            style={{maxHeight:'30px',maxWidth:'120px',border:'none',backgroundColor:'#FFFFFF',padding:'5px'}}
                                        />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                <Col xs={12}>
                <Button onCLick={onClose} style={{ borderRadius: '25px', height:'34px', width:'104px',backgroundColor:'#FF6D6D',color:'#F1F2FC',border:'none' }}>{' '} SAVE</Button>
                </Col>
                </Row>
            </Container>
            </Modal>
    )
}