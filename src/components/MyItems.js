import React from 'react';
import {Image, Container, Col,  Row} from 'react-bootstrap'
import Fruit from './products/Fruit'

export default function MyItems(props) {
    return (
        <Container>
            <Row>
                <Image src="/grapefruit.jpg" alt=" grapefruit helmet" width="171" height="180" />
            </Row>
        </Container>
    )
}