import React from 'react'
import CheckoutForm from './CheckoutForm'
import MyItems from './MyItems'
import {Container, Col,  Row} from 'react-bootstrap'


export default function Cart(props) {
    return (
        <Container>
            <Row>
                <Col className="m-3">
                    <MyItems/>
                    <p> $2 </p>
                </Col>
            </Row>
            <Row >
                <Col md={{ span: 4, offset: 4 }}>
                    <p>Your Total is: $2</p>
                    <CheckoutForm />    
                </Col>
            </Row>
        </Container>
    )
}