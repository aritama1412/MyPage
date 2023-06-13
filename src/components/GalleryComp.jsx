import React from 'react'

import {Container, Row, Col} from 'react-bootstrap'

import Gallery1 from '../assets/img/gallery/coffea.jpg'
import Gallery2 from '../assets/img/gallery/desk2.jpg'
import Gallery3 from '../assets/img/gallery/desk3.jpg'
import Gallery4 from '../assets/img/gallery/desk5.jpg'
import Gallery5 from '../assets/img/gallery/desk1.jpg'
import Gallery6 from '../assets/img/gallery/desk8.jpg'

const GalleryComp = () => {
  return (
    <div className='gallery min-vh-100 d-flex align-items-center' id='gallery'>
        <Container>
            <h3 className='text-center fw-bold fs-1 title'>Gallery</h3>
            <Row className='row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-4'>
                <Col>
                    <img src={Gallery1} data-aos="fade-up" alt="unsplash.com" className='w-100' />
                </Col>
                <Col>
                    <img src={Gallery2} data-aos="fade-up" data-aos-delay="200" alt="unsplash.com" className='w-100' />
                </Col>
                <Col>
                    <img src={Gallery3} data-aos="fade-up" data-aos-delay="300" alt="unsplash.com" className='w-100' />
                </Col>
                <Col>
                    <img src={Gallery4} data-aos="fade-up" data-aos-delay="400" alt="unsplash.com" className='w-100' />
                </Col>
                <Col>
                    <img src={Gallery5} data-aos="fade-up" data-aos-delay="500" alt="unsplash.com" className='w-100' />
                </Col>
                <Col>
                    <img src={Gallery6} data-aos="fade-up" data-aos-delay="600" alt="unsplash.com" className='w-100' />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default GalleryComp