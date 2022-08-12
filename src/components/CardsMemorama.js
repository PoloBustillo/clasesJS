import { Col, Container, Image, Row } from "react-bootstrap";

function random() {
  return 0.5 - Math.random();
}

function createCol(url) {
  return (
    <Col className="col-4 col-sm-3 border image-container">
      <Image src={url} className="image"></Image>
    </Col>
  );
}

function createImages(arrayImages) {
  let newArrayConcat = arrayImages.concat(arrayImages);
  let newArraySort = newArrayConcat.sort(random);
  let finalArray = newArraySort.map(createCol);
  //arrayImages.concat(arrayImages).sort(random).map(createCol);
  return finalArray;
}

function CardsMemorama({ imagen }) {
  return (
    <Container className="text-center board-container">
      <Row className="center">{createImages(imagen)}</Row>
    </Container>
  );
}

export default CardsMemorama;
