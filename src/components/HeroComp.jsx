import { Container, Row, Col } from "react-bootstrap";

const HeroComp = () => {
  return (
    <div className="hero min-vh-100 w-100" id="home">
      <Container>
        <Row>
          <Col >
            <h1 className="text-white text-center fs-1 animate__animated animate__fadeInUp">Landing Page</h1>
            <p className="text-white text-white-50 text-center animate__animated animate__fadeInUp animate__delay-1s">Cupidatat dolor voluptate occaecat amet elit fugiat qui occaecat consequat.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HeroComp