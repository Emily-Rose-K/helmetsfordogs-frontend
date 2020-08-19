import React from 'react'
import {Image, Container, Col,  Row} from 'react-bootstrap'
import AddToCart from '../AddToCart'

export default function Mask() {
    return (
        <Container>
            <Row>
                <Col>
                <Image src="/covid-helmet.jpg" alt="covid19 mask" width="171" height="180" />
                    <p>Mask helmet $7</p> <AddToCart />
                </Col>
            </Row>
        </Container>
    )

}