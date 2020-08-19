import React from 'react'
import {Image, Container, Col,  Row} from 'react-bootstrap'
import AddToCart from '../AddToCart'

export default function Blue() {

    return (
        <Container>
            <Row>
                <Col>
                    <Image src="/blue.png" alt="blue helmet"  width="171" height="180" />
                    <p>Blue helmet $3</p> <AddToCart />
                </Col>
            </Row>
        </Container>
    )

}