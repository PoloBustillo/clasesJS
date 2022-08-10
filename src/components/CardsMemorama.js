import { Col,Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";

function CardsMemorama({imagen}) {
  return (
    <Container className="text-center board-container">
      <Row className="center">
     <Col><img src={imagen[0]}></img></Col> 
      <Col><img src={imagen[1]}></img></Col>
     <Col><img src={imagen[2]}></img></Col> 
    <Col><img src={imagen[3]}></img></Col> 
     <Col><img src={imagen[4]}></img></Col> 
     <Col><img src={imagen[5]}></img></Col> 
     <Col><img src={imagen[6]}></img></Col> 
     <Col><img src={imagen[7]}></img></Col> 
     <Col><img src={imagen[8]}></img></Col> 
     <Col><img src={imagen[9]}></img></Col> 
      </Row>
    </Container>
  );
}

export default CardsMemorama;
