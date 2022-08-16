import { Container, Row } from "react-bootstrap";
import Box from "./Box";

/**
 *
 * @param {Object[]} urls - array de urls ya duplicadas y ordenadas.
 * @returns Componente de react con las casillas del memorama
 */
function CardsMemorama({ urls }) {
  return (
    <Container className="text-center board-container">
      <Row className="center">
        {urls.map((url) => {
          return <Box imagen={url}></Box>;
        })}
      </Row>
    </Container>
  );
}

export default CardsMemorama;
