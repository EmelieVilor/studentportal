import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import courseContext from "../Contexts/CourseContext"
import { Container, Button, Row, Col } from 'react-bootstrap';
import RegisteredCoursesContext from "../Contexts/RegistreredCourses";
import Alert from "@mui/material/Alert";

export default function KursDetaljer(){

const courses = useContext(courseContext);
const {isCourseRegistered} = useContext(RegisteredCoursesContext);

const {courseId} = useParams();

const course = courses.find((c)=> c.id === (courseId));

    return(

        <Container>
        <h1 style={{marginTop:"40px"}}>{`Mer om ${course.title}`}</h1>
        <Row style={{marginTop:"30px"}}>
        <Col lg>
          <img src={course.img} alt={course.title} style={{ width: "100%", maxWidth: "600px" }} />
   
        </Col>

        <Col lg>
        <p style={{textAlign:'Justify', marginTop:'40px'}}>{course.more}</p>

        <Container style={{border:"1px solid black", borderRadius:"10px", display:"flex", gap:"30px", justifyContent: "center", padding:"20px", marginBottom: "30px", marginTop:'20px'}}>
            <h6 className="text-primary">{course.duration}</h6>
            <h6 className="text-primary">{course.level}</h6>
            <h6 className="text-primary">{course.language}</h6>

        </Container>


        <Link to={`/registrera`}>
        <Button>Registrera Dig Här</Button>
        </Link>

        {isCourseRegistered(courseId) && (
        <Alert style={{marginTop:'30px'}} severity="success">Kursen är redan registrerad.</Alert>
        )}
        </Col>
        </Row>

      </Container>
    );

};