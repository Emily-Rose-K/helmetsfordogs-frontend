import React from 'react'
import {Image, Container, Col,  Row} from 'react-bootstrap'
import Fruit from './products/Fruit'
import Bear from './products/Bear'
import Blue from './products/Blue'
import Pink from './products/Pink'
import Metal from './products/Metal'
import Mask from './products/Mask'
import Cowgirl from './products/Cowgirl'
import Cowboy from './products/Cowboy'


export default function Shop() {

    return (
        <Container>
            <Row>
                <Col className="m-3" id="metal">
                   <Metal />
                </Col> 
                <Col className="m-3" id="pink">
                  <Pink />
                </Col>
                <Col className="m-3" id="blue">
                   <Blue />
                </Col>
                <Col className="m-3" id="cowgirl">
                   <Cowgirl />
                </Col>
            </Row>
            <Row>
                <Col className="m-3" id="cowboy">
                   <Cowboy />
                </Col>
                <Col className="m-3" id="grapefruit">
                  <Fruit />
                </Col>
                <Col className="m-3" id="covid">
                    <Mask />
                </Col>
                <Col className="m-3" id="bear">
                    <Bear />
                </Col>
            </Row>
        </Container>
    )
}