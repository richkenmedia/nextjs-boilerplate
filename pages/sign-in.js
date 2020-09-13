import { useRouter } from 'next/router';
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  CardText,
  Button,
} from '../components/vendor/reactstrap';

export default function SignIn() {
  const router = useRouter();
  // if the following return has more than tags then wrap them in ()
  return (
    <div className="bg-warning vh-100 d-block">
      <Container fluid={true}>
        <Row className="justify-content-center">
          <Col md="4" sm="12" className="mt-5">
            <Card className="shadow-lg">
              <CardBody>
                <CardTitle className="text-center">
                  <h1>SIGN IN</h1>
                </CardTitle>
                <CardText>
                  <form>
                    <div class="form-group">
                      <label htmlFor="emailInput">Email address</label>
                      <input
                        type="email"
                        class="form-control"
                        id="emailInput"
                        aria-describedby="emailHelp"
                        placeholder="Please enter your email"
                      />
                      <small id="emailHelp" class="form-text text-muted">
                        We'll never share your email with anyone else.
                      </small>
                    </div>
                    <div class="form-group">
                      <label htmlFor="passwordInput">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="passwordInput"
                        placeholder="Please enter your password"
                      />
                    </div>
                    <div class="form-group form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="rememberMeCheck"
                      />
                      <label class="form-check-label" htmlFor="rememberMeCheck">
                        Remember Me
                      </label>
                    </div>
                    <a href="/sign-up">Not registerd yet?</a>
                    <div className="d-flex flex-row-reverse">
                      <Button
                        color="primary"
                        onClick={() => {
                          router.push('/dashboard');
                        }}
                      >
                        Sign In
                      </Button>
                    </div>
                  </form>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
