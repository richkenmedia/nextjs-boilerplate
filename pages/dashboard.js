import Head from 'next/head';
import { Container, Row, Col, Button } from '../components/vendor/reactstrap';

export default function Dashboard() {
  const toggleMenu = () => {
    const element = document.querySelector('#sidebar');
    element.classList.toggle('open');
  };
  // if the following return has more than tags then wrap them in ()
  return (
    <div className="d-flex">
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

              <ul className="nav flex-column mt-4">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Users
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Roles
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Permissions
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Services
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="w-100">
        <nav className="navbar navbar-dark bg-secondary">
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
        <Container fluid={true}>
          <Row>
            <Col className="mt-4">
              <h1>RichUI</h1>
              <p>This is a demo page for Richken Media BootStrap Theme</p>

              <h3>Card Layouts</h3>
              <div class="card" style={{ width: '18rem' }}>
                <img
                  src="https://picsum.photos/seed/picsum/200/100"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div class="card-footer">Card footer</div>
              </div>

              <h3>Alerts</h3>
              <div class="alert alert-danger" role="alert">
                A simple success alert—check it out!
              </div>

              <h3>Badges</h3>
              <div className="mt-3 mb-3">
                <span class="badge badge-success">Success</span>&nbsp;
                <span class="badge badge-warning">Success</span>&nbsp;
                <span class="badge badge-danger">Success</span>
              </div>

              <h3>Buttons</h3>
              <div className="mt-3 mb-3">
                <button type="button" class="btn btn-primary">
                  Primary
                </button>
                &nbsp;
                <button type="button" class="btn btn-secondary">
                  Secondary
                </button>
                &nbsp;
                <button type="button" class="btn btn-success">
                  Success
                </button>
                &nbsp;
                <button type="button" class="btn btn-danger">
                  Danger
                </button>
                &nbsp;
                <button type="button" class="btn btn-warning">
                  Warning
                </button>
                &nbsp;
                <button type="button" class="btn btn-info">
                  Info
                </button>
                &nbsp;
                <button type="button" class="btn btn-light">
                  Light
                </button>
                &nbsp;
                <button type="button" class="btn btn-dark">
                  Dark
                </button>
              </div>

              <h3>Progress Bars</h3>
              <div className="progress mb-3">
                <div
                  className="progress-bar bg-danger w-25"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="progress mb-3">
                <div
                  className="progress-bar bg-warning w-25"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="progress mb-3">
                <div
                  className="progress-bar bg-success w-25"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="progress mb-3">
                <div
                  className="progress-bar bg-info w-25"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="progress mb-3">
                <div
                  className="progress-bar bg-secondary w-25"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-primary w-25"
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
