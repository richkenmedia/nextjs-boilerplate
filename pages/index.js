import Head from 'next/head';
import { Container, Row, Col, Button } from '../components/vendor/reactstrap';

export default function Home() {
  // if the following return has more than tags then wrap them in ()
  return (
    <Container fluid={true}>
      <Row>
        <Col>
          <h1>Home Page</h1>
        </Col>
      </Row>
    </Container>
  );
}
