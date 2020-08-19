import React from 'react'
import CheckoutForm from './CheckoutForm'
import MyItems from './MyItems'
import {Container, Col,  Row} from 'react-bootstrap'


export default function Cart(props) {
    return (
        <Container>
            <Row>
                <MyItems total={props.total} />
                <CheckoutForm />    
            </Row>
        </Container>
    )
}