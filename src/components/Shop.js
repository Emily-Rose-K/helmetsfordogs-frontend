import React from 'react'
import {Image, Container, Col,  Row} from 'react-bootstrap'

export default function Shop() {
    return (
        <Container>
            <Row>
                <Col className="m-3" id="metal">
                    <Image src="/metal.jpg" alt="metal helmet"  width="171" height="180" />
                    <p>Metal helmet $7</p> <button>Add to cart🛒</button>
                </Col> 
                <Col className="m-3" id="pink">
                    <Image src="/pink.jpg" alt="pink helmet"  width="171" height="180" />
                    <p>Pink helmet $3</p> <button>Add to cart🛒</button>
                </Col>
                <Col className="m-3" id="blue">
                    <Image src="/blue.png" alt="blue helmet"  width="171" height="180" />
                    <p>Blue helmet $3</p> <button>Add to cart🛒</button>
                </Col>
                <Col className="m-3" id="cowgirl">
                    <Image src="/ripley-cowboy.jpg" alt="cowboy hat" width="171" height="180" />
                    <p>Cowgirl helmet $8</p> <button>Add to cart🛒</button>
                </Col>
            </Row>
            <Row>
                <Col className="m-3" id="cowboy">
                    <Image src="/giles-cowboy.jpg" alt="cowboy hat" width="171" height="180" />
                    <p>Cowboy helmet $8</p> <button>Add to cart🛒</button>
                </Col>
                <Col className="m-3" id="grapefruit">
                    <Image src="/grapefruit.jpg" alt=" grapefruit helmet" width="171" height="180" />
                    <p>Grapefruit helmet $2</p> <button>Add to cart🛒</button>
                </Col>
                <Col className="m-3" id="covid">
                    <Image src="/covid-helmet.jpg" alt="covid19 mask" width="171" height="180" />
                    <p>Mask helmet $7</p> <button>Add to cart🛒</button>
                </Col>
                <Col className="m-3">
                    <Image src="/bearhat.jpg" alt="bear hat" width="171" height="180" />
                    <p>Bear helmet $12</p> <button>Add to cart🛒</button>
                </Col>
            </Row>
        </Container>
    )
}