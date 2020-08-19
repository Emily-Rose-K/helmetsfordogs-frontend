import React from 'react';
import {Image, Col, Row, Container} from 'react-bootstrap';

export default function Gallery() {
    return (
        <div>
            <Container>
            <Row className="m-5">
                <Col>
                    <Image src="/elegance.JPEG" alt="Minpin" width="360" height="460" /> 
                </Col>
                <Col>
                    <h3> Elegance ✨ Nov 2019 </h3>
                    <p> Featuring Babe, a three-year-old miniature pinscher sunbathing in a charming edwardian home in San Francisco's Noe Valley.
                        The picture was taken by Deanna Glory. Glory, who has a fondness for Cockapoo's, was able to portray Babe's chocolate coat in 
                        the most elegant fashion. </p>
                </Col>
            </Row>
            <Row className="m-5">
                <Col>
                    <Image src="/giles.jpg" alt="Chihuahua" width="360" height="320" /> 
                </Col>
                <Col>
                    <h3> Blep 👅 Aug 2020 </h3>
                    <p> Giles, an older gentleman, is captured in a rare moment of silliness with his tongue outside of his jowls. The photographer intended to show that
                        even as we age, our inner child is still at play - and a dogs life is full of ease and comfort. </p>
                </Col>
            </Row>
            <Row className="m-5">
                <Col>
                    <Image src="/ripley.jpg" alt="Chorkie" width="360" height="460" /> 
                </Col>
                <Col>
                    <h3> Watchful 👁 Aug 2020 </h3>
                    <p> By the same photographer responsible for Blep, Watchful portrays a chorkie (that is half-chihuahua,half-yorkie) by the name of Ripley standing 
                        guard at the top of the stairs in her Portland home. She is the head of the household and protects it from impending doom. The mailman no longer
                        walks up to the doorstep, instead leaving his parcels at the foot of the front porch.  </p>
                </Col>
            </Row>
            <Row className="m-5">
                <Col>
                    <Image src="/tweak.jpg" alt="Chihuahua, black" width="360" height="460" /> 
                </Col>
                <Col>
                    <h3> Glamour 🎩 Aug 2020 </h3>
                    <p>Glamour, photographed by Stephanie Hudson, tells the story of Tweak an old man with a big attitude. At first glance he seems poised, regal, and confident. 
                       Look deep into his eyes and a different story emerges - a story of a dog who has lived a thousand lives. </p>
                </Col>
            </Row>
            <Row className="m-5">
                <Col>
                    <Image src="/laika.jpg" alt="Bernese Mountain Dog" width="360" height="460" /> 
                </Col>
                <Col>
                    <h3> Serenity 🌸 Feb 2020 </h3>
                    <p>Laika sits atop a hill in the springtime, surrounded by petal blossoms and love. She looks at her humans with a twinkle in her eye, knowing that no one has
                       felt the joy she knows now. The photograph reminds us to stop and smell the flowers and to appreciate all that we have.  </p>
                </Col>
            </Row>
            </Container>
        </div>
    )
}