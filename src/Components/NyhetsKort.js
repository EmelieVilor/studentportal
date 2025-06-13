import { Container, Row, Col, Card } from "react-bootstrap";
import { useContext } from "react";
import newsContext from "./Contexts/NewsContext";

export default function Nyhetskort() {
  const newsData = useContext(newsContext);

  return (
    <Container fluid>
      <Row className="justify-content-center">
        {newsData.map((news) => (
          <Col xs="auto">
            <Card
              key={news.id}
              style={{
                width: "30rem",
                height: "35rem",
                marginTop: "20px",
                marginBottom: "50px",
              }}
            >
              <Card.Img variant="top" src={news.img} />
              <Card.Body>
                <Card.Title>{news.title}</Card.Title>

                <Card.Text style={{ textAlign: "justify", marginTop: "20px" }}>
                  {news.text}
                </Card.Text>
                <Card.Subtitle style={{ textAlign: "left", marginTop: "20px" }}>
                  {news.published}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
