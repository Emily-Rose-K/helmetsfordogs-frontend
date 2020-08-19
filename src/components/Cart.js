import React from 'react'
import CheckoutForm from './CheckoutForm'
import MyItems from './MyItems'
import {Container, Col,  Row} from 'react-bootstrap'


export default function Cart() {
    return (
        <Container>
            <Row>
                <Col className="mt-5">
                    <MyItems/>
                    <p> $2 </p>
                    <p>Your Total is: $2</p>
                </Col>
                <Col className="mt-5">
                    <CheckoutForm />    
                </Col>
            </Row>

        </Container>
    )
}