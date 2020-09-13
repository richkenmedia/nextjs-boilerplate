import Head from 'next/head';
import { Container, Row, Col, Button } from '../components/vendor/reactstrap';

export default function Dashboard() {
  // if the following return has more than tags then wrap them in ()
  return (
    <Container fluid={true}>
      <Row>
        <Col>
          <h1>Default Home Page</h1>
          <Button color="primary">Hello</Button>
          <p>Hello World</p>
          <div class="progress mb-3">
            <div
              class="progress-bar bg-danger w-25"
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div class="progress mb-3">
            <div
              class="progress-bar bg-warning w-25"
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div class="progress mb-3">
            <div
              class="progress-bar bg-success w-25"
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div class="progress mb-3">
            <div
              class="progress-bar bg-info w-25"
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div class="progress mb-3">
            <div
              class="progress-bar bg-secondary w-25"
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div class="progress">
            <div
              class="progress-bar bg-primary w-25"
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
