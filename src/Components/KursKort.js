import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useContext } from "react";
import courseContext from "./Contexts/CourseContext";
import RegisteredCoursesContext from "./Contexts/RegistreredCourses";

export default function Kurskort() {
  const courses = useContext(courseContext);
  const { isCourseRegistered } = useContext(RegisteredCoursesContext);

  return (
    <Container fluid>
      <Row className="justify-content-center">
        {courses.map((course) => (
          <Col xs="auto">
            <Card key={course.id} style={{ width: "25rem", margin: "15px" }}>
              <Card.Img variant="top" src={course.img} />
              <Card.Body>
                <Card.Title style={{ height: "2rem" }}>
                  {course.title}
                  {isCourseRegistered(course.id) && (
                    <i className="fa-solid fa-star ms-2 text-primary" title="Registrerad"></i>
                  )}
                </Card.Title>
                <Card.Subtitle style={{ height: "4rem" }}>
                  {course.summary}
                </Card.Subtitle>
                <Link to={`/kursdetaljer/${course.id}`}>
                  <Button variant="secondary">Läs Mer</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
