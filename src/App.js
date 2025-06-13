import "./App.css";
import { NavLink, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { useContext } from "react";
import RegisteredCoursesContext from "./Components/Contexts/RegistreredCourses";

function App() {

  const {registeredCourses} = useContext(RegisteredCoursesContext);


  return (
    <div className="App">
      <Nav
        variant="pills"
        className="justify-content-center"
        style={{ paddingTop: "20px" }}
      >
        <Nav.Item style={{marginRight:"30px"}}>
          <Nav.Link as={NavLink} to="/" end>
            Startsida
          </Nav.Link>
        </Nav.Item >
        <Nav.Item style={{marginRight:"30px"}}>
          <Nav.Link as={NavLink} to="/kurser">
            Kurser
          </Nav.Link>
        </Nav.Item >
        <Nav.Item style={{marginRight:"30px"}} >
          <Nav.Link as={NavLink} to="/nyheter">
            Nyheter
          </Nav.Link>
        </Nav.Item>
                <Nav.Item style={{marginRight:"30px"}} >
          <Nav.Link as={NavLink} to="/registrera">
            Registrera
          </Nav.Link>
        </Nav.Item>


        <NavDropdown variant="pills" title={
            <>
              <i className="fas fa-user me-2"></i>
            </>
          }
          id="nav-dropdown"
        >
          <NavDropdown.Item disabled value="">Mina Kurser</NavDropdown.Item>
          <NavDropdown.Divider />
          {registeredCourses.map((course) => (
          <NavDropdown.Item key={course.id} value={course.id}>{course.title}</NavDropdown.Item>
          ))}
        </NavDropdown>
      </Nav>

      <Outlet />
    </div>
  );
}

export default App;
