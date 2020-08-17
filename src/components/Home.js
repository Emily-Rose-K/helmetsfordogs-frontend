import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import FeaturedGallery from './FeaturedGallery';
import FeaturedProducts from './FeaturedProducts';
import { Container, Row, Col } from 'react-bootstrap';


export default function Home() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Container>
                <Row>
                    <Col>
                        <FeaturedGallery />
                    </Col>
                    <Col>
                        <FeaturedProducts />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}