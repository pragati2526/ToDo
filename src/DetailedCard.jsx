import React from 'react'
// import './DetCardStyle.css'
import {Container,Row,Col,Form,FloatingLabel,Button} from 'react-bootstrap';


export default function DetailedCard() {
    return (
            <Container fluid style={{ backgroundColor:'#F1F2FC',padding:'20px 10px',borderRadius:'25px'}}>
                <Row>
                    <Col xs={12}>
                    <FloatingLabel controlId="floatingTextarea2">
                            <Form.Control
                                as="textarea"
                                placeholder="Card Title"
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
                        <Row>
                            <Col xs={12}>
                            <h4 style={{color:'#4D4D5C'}}>Add label</h4>
                            </Col>
                            <Col xs={12}>
                            <Row>
                                <Col xs={4}><Button size="lg" style={{borderRadius:'30px',backgroundColor:'#FFC700',width: '32px',height: '11px',border: '1px solid #A2A3C1'}}></Button></Col>
                                <Col xs={4}><Button size="lg" style={{borderRadius:'30px',backgroundColor:'#FF0505',width: '32px',height: '11px',border: '1px solid #A2A3C1'}}></Button></Col>
                                <Col xs={4}><Button size="lg" style={{borderRadius:'30px',backgroundColor:'#90FF02',width: '32px',height: '11px',border: '1px solid #A2A3C1'}}></Button></Col>
                            </Row>
                            <Row>
                                <Col xs={4}><Button size="lg" style={{borderRadius:'30px',backgroundColor:'#00FFA3',width: '32px',height: '11px',border: '1px solid #A2A3C1'}}></Button></Col>
                                <Col xs={4}><Button size="lg" style={{borderRadius:'30px',backgroundColor:'#0057FF',width: '32px',height: '11px',border: '1px solid #A2A3C1'}}></Button></Col>
                                <Col xs={4}><Button size="lg" style={{borderRadius:'30px',backgroundColor:'#680CFF',width: '32px',height: '11px',border: '1px solid #A2A3C1'}}></Button></Col>
                            </Row>
                            <Row>
                                <Col xs={4}><Button size="lg" style={{borderRadius:'30px',backgroundColor:'#CF01F0',width: '32px',height: '11px',border: '1px solid #A2A3C1'}}></Button></Col>
                                <Col xs={4}><Button size="lg" style={{borderRadius:'30px',backgroundColor:'#620000',width: '32px',height: '11px',border: '1px solid #A2A3C1'}}></Button></Col>
                                <Col xs={4}><Button size="lg" style={{borderRadius:'30px',backgroundColor:'#555631',width: '32px',height: '11px',border: '1px solid #A2A3C1'}}></Button></Col>
                            </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <h3 style={{color:'#4D4D5C'}}>Due Date :</h3>
                            <br/>
                            <Row>
                                <Col xs={6}><h4 style={{color:'#291A81'}}>Start Date:</h4></Col>
                                <Col xs={6}>
                                    <FloatingLabel controlId="floatingTextarea2">
                                        <Form.Control
                                            as="textarea"
                                            placeholder="dd/mm/yyyy"
                                            style={{height:'15px',width:'90px',border:'none',backgroundColor:'#FFFFFF',padding:'10px'}}
                                        />
                                    </FloatingLabel>
                                </Col>

                                <Col xs={6}><h4 style={{color:'#291A81'}}>End Date:</h4></Col>
                                <Col xs={6}>
                                    <FloatingLabel controlId="floatingTextarea2">
                                        <Form.Control
                                            as="textarea"
                                            placeholder="dd/mm/yyyy"
                                            style={{height:'15px',width:'90px',border:'none',backgroundColor:'#FFFFFF',padding:'10px'}}
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
                <Button style={{ borderRadius: '25px', height:'34px', width:'104px',backgroundColor:'#FF6D6D',color:'#F1F2FC',border:'none' }}>{' '} SAVE</Button>
                </Col>
                </Row>
            </Container>
    )
}
