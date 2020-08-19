import React from 'react'
import {Image, Container, Col,  Row} from 'react-bootstrap'
import AddToCart from '../AddToCart'

export default function Pink() {

    return (
        <Container>
            <Row>
                <Col>
                    <Image src="/pink.jpg" alt="pink helmet"  width="171" height="180" />
                    <p>Pink helmet $3</p> <AddToCart price={3} />
                </Col>
            </Row>
        </Container>
    )

}