import Head from 'next/head';
import { Container, Row, Col, Button } from '../components/vendor/reactstrap';

export default function Home() {
  // if the following return has more than tags then wrap them in ()
  return (
    <Container>
      <Row>
        <Col>
          <h1>Defualt Home Page</h1>
          <Button color="danger">Hello</Button>
        </Col>
      </Row>
    </Container>
  );
}
