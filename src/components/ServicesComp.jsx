import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

const ServicesComp = () => {
  return (
    <div className='services min-vh-100 d-flex align-content-center' id='services'>
        <Container>
            <Row className='title'>
                <Col >
                    <h1 className="text-center fw-bold" data-aos="fade-up" data-aos-delay="200">Landing Page</h1>
                    <p className="text-center" data-aos="fade-up" data-aos-delay="300">Cupidatat dolor voluptate occaecat amet elit fugiat qui occaecat consequat.</p>
                </Col>
            </Row>
            <Row className='row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center'>
                <Col className='text-center py-5 px-3 border' data-aos="fade-right" data-aos-delay="400">
                    <i class="fa-brands fa-linkedin fs-2 mb-4"></i>
                    <h5 className='fw-bold'>Linkedin</h5>
                    <p>Eiusmod ullamco ea commodo tempor adipisicing fugiat tempor enim in veniam labore exercitation.</p>
                </Col>
                <Col className='text-center py-5 px-3 border' data-aos="fade-up" data-aos-delay="400">
                    <i class="fa-brands fa-square-instagram fs-2 mb-4"></i>
                    <h5 className='fw-bold'>Instagram</h5>
                    <p>Esse aliqua minim tempor adipisicing id irure ipsum nisi proident nulla ut laborum et cupidatat.</p>
                </Col>
                <Col className='text-center py-5 px-3 border' data-aos="fade-left" data-aos-delay="400">
                    <i class="fa-brands fa-square-whatsapp fs-2 mb-4"></i>
                    <h5 className='fw-bold'>WhatsApp</h5>
                    <p>Ut occaecat nostrud anim voluptate ut consectetur proident sit non aliquip.</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ServicesComp