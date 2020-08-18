import React from 'react';
import {Image, Col, Row} from 'react-bootstrap'

export default function FeaturedProducts() {
    return (
        <div>
            <Row >
                <Col> 
                    <Image className="m-5" src="/blue.png" alt="Minpin wearing a blue helmet." width="171" height="180" />
                    <Image className="m-5" src="/pink.jpg" alt="Minpin wearing a pink helmet." width="171" height="180" /> 
                </Col>
            </Row>
            <Row >
                <Col> 
                    <Image className="m-5" src="/covid-helmet.jpg" alt="Minpin wearing a metal helmet." width="171" height="180" />
                    <Image className="m-5"src="/ripley-cowboy.jpg" alt="Chorkie wearing a cowboy hat." width="171" height="180" /> 
                </Col>
            </Row>
        </div>
    )
}