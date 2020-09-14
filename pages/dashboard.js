import Head from 'next/head';
import { Container, Row, Col, Button } from '../components/vendor/reactstrap';

export default function Dashboard() {
  // if the following return has more than tags then wrap them in ()
  return (
    <div className="d-flex vh-100">
      <div className="bg-dark" id="sidebar">
        <Container>
          <Row>
            <Col className="mt-4 text-white">
              <div className="d-flex justify-content-center">
                <img
                  src="https://picsum.photos/id/64/75/75"
                  alt=""
                  className="rounded-circle border border-white"
                />
              </div>

              <ul class="nav flex-column mt-4">
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    Users
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Roles
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Permissions
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Services
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="w-100">
        <nav class="navbar navbar-dark bg-secondary">
          <button class="navbar-toggler" type="button">
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
        <Container>
          <Row>
            <Col className="mt-4">
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
      </div>
    </div>
  );
}
