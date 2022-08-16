import { Col, Container, Image, Row } from "react-bootstrap";

/**
 *
 * @param {Object[]} urls - array de urls ya duplicadas y ordenadas.
 * @returns Componente de react con las casillas del memorama
 */
function CardsMemorama({ urls }) {
  /**
   *
   * @param {string de la url} url
   * @returns Una casilla del memorama
   */
  function createCol(url) {
    return (
      <Col className="col-4 col-sm-3 image-container flip-card">
        <div class="flip-card-inner">
          <div className="flip-card-front">
            <h1>?</h1>
          </div>
          <div className="flip-card-back">
            <Image src={url} className="image"></Image>
          </div>
        </div>
      </Col>
    );
  }

  return (
    <Container className="text-center board-container">
      <Row className="center">
        {urls.map((url) => {
          return createCol(url);
        })}
      </Row>
    </Container>
  );
}

export default CardsMemorama;
