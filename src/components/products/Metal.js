import React from 'react'
import {Image, Container, Col,  Row} from 'react-bootstrap'
import AddToCart from '../AddToCart'

export default function Metal(props) {

    
    return (
        <Container>
            <Row>
                <Col>
                <Image src="/metal.jpg" alt="metal helmet"  width="171" height="180" />
                    <p>Metal helmet $7</p> <AddToCart price={7}/>
                </Col>
            </Row>
        </Container>
    )

}