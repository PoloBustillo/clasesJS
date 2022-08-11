import { Col, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";

function createImages(arrayImages) {
  return(
    arrayImages.map((url) => { //url1,url2,url3...
      return (<Col><img src={url}></img></Col>);
    })
  );
}

function CardsMemorama({ imagen }) {
  return (
    <Container className="text-center board-container">
      <Row className="center">
       {
        createImages(imagen)
       }
      </Row>
    </Container>
  );
}

export default CardsMemorama;
