import React from 'react'
import {Image, Container, Col,  Row} from 'react-bootstrap'
import AddToCart from '../AddToCart'

export default function Bear() {
    return (
        <Container>
            <Row>
                <Col className="m-3">
                    <Image src="/bearhat.jpg" alt="bear hat" width="171" height="180" />
                    <p>Bear helmet $12</p> <AddToCart price={12} />
                </Col>
            </Row>
        </Container>
    )

}