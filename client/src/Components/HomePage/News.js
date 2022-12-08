import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './homepageStyle.css'

function News() {
  return (
    <Container>
      <h2>News</h2>
      <Row>
        <Col>
          <Card border="light" style={{ margin: "30px 20px 10px 20px" }}>
            <Card.Img variant="top" src="./city_photos/budapest_photo2.jpg" />
            <Card.Body style={{ backgroundColor: "#1c1c1c" }}>
              <Card.Text>
                <Link to="#" class="bold">
                  Veniam ullamco cupidatat aliquip incididunt duis commodo fugiat ex culpa exercitation.
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border="light" style={{ margin: "30px 20px 10px 20px" }}>
            <Card.Img variant="top" src="./dummy_picture.png" />
            <Card.Body style={{ backgroundColor: "#1c1c1c" }}>
              <Card.Text>
                <Link to="#" class="bold">
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card border="light" style={{ margin: "30px 20px 10px 20px" }}>
            <Card.Img variant="top" src="./city_photos/paris_photo.jpg" />
            <Card.Body style={{ backgroundColor: "#1c1c1c" }}>
              <Card.Text>
                <Link to="#" class="bold">
                  Veniam ullamco cupidatat aliquip incididunt duis commodo fugiat ex culpa exercitation.
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border="light" style={{ margin: "30px 20px 10px 20px" }}>
            <Card.Img variant="top" src="./dummy_picture.png" />
            <Card.Body style={{ backgroundColor: "#1c1c1c" }}>
              <Card.Text>
                <Link to="#" class="bold">
                  Veniam ullamco cupidatat aliquip incididunt duis commodo fugiat ex culpa exercitation.
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Button href="#" variant="outline-light" style={{ marginTop: "20px", marginBottom: "50px" }}>All News</Button>
    </Container>

  );
}

export default News;