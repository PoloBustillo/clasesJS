import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";

function BoardMemorama({ change }) {
  return (
    <Row className="my-4">
      <Form.Label column="lg" lg={2}>
        Tipos de Fotos
      </Form.Label>
      <Col>
        <Form.Control
          onChange={(event) => {
            change(event.target.value);
          }}
          size="lg"
          type="text"
          placeholder="Elige"
        />
      </Col>
    </Row>
  );
}

export default BoardMemorama;
