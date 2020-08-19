import React from 'react'
import {Image, Container, Col,  Row} from 'react-bootstrap'
import AddToCart from '../AddToCart'

export default function Cowboy() {

    return (
        <Container>
            <Row>
                <Col className="m-3">
                    <Image src="/giles-cowboy.jpg" alt="cowboy hat" width="171" height="180" />
                    <p>Cowboy helmet $8</p> <AddToCart />
                </Col>
            </Row>
        </Container>
    )

}