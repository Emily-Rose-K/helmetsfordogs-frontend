import React from 'react'
import {Image, Container, Col,  Row} from 'react-bootstrap'
import AddToCart from '../AddToCart'

export default function Fruit(props) {
    
    return (
        <Container>
            <Row>
                <Col>
                    <Image src="/grapefruit.jpg" alt=" grapefruit helmet" width="171" height="180" />
                    <p>Grapefruit helmet $2</p> <AddToCart />
                </Col>
            </Row>
        </Container>
    )

}