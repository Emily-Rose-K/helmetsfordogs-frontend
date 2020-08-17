import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Banner() {
    return(
        <Container fluid>
            <Row>
                <Col><h1 className="text-center">HELMETS FOR DOGS! 🐩 🐕</h1></Col>
            </Row>
        </Container>
    )
}