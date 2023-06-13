import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

const FooterComp = () => {
  return (
    <div className='footer pb-3 pt-3'>
        <Container>
            <Row>
                <Col>
                    <h3 className='fw-bold text-white text-align-center'>Ngoding with CodeWin-</h3>
                </Col>
                <Col className='text-end'>
                    <i className='fa-brands fa-facebook text-white fs-1 mx-lg-3 mx-2'></i>
                    <i className='fa-brands fa-twitter text-white fs-1 mx-lg-3 mx-2'></i>
                    <i className='fa-brands fa-linkedin text-white fs-1 mx-lg-3 mx-2'></i>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='text-white-50 text-center'>&copy; Copyright: CodeWin- 2023, All right reserved.</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default FooterComp