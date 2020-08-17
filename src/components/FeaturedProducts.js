import React from 'react';
import {Image, Col, Row} from 'react-bootstrap'

export default function FeaturedProducts() {
    return (
        <div>
            <Row >
                <Col> 
                    <Image src="/blue.png" alt="Minpin wearing a blue helmet." width="171" height="180" />
                    <Image src="/blue.png" alt="Minpin wearing a blue helmet." width="171" height="180" /> 
                </Col>
            </Row>
            <Row >
                <Col> 
                    <Image src="/blue.png" alt="Minpin wearing a blue helmet." width="171" height="180" />
                    <Image src="/blue.png" alt="Minpin wearing a blue helmet." width="171" height="180" /> 
                </Col>
            </Row>
        </div>
    )
}