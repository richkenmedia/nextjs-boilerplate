import Head from 'next/head';
import { Container, Row, Col, Button } from '../components/vendor/reactstrap';

export default function Home() {
  // if the following return has more than tags then wrap them in ()
  return (
    <div className="bg-danger vh-100">
      <Container fluid={true}>
        <Row>
          <Col className="pt-5">
            <h1 className="text-center text-white">Home Page</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
