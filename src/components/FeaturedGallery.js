import React from 'react';
import Image from 'react-bootstrap/Image'

export default function FeaturedGallery() {
    return (
        <div className="m-5">
            <Image src="/elegance.JPEG" alt="Minpin" width="360" height="460" /> 
            <p>Featured from the Gallery: Elegance ✨ Nov 2019 </p>
        </div>
    )
}