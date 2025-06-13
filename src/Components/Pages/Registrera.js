import Alert from "@mui/material/Alert";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useContext, useState } from "react";
import courseContext from "../Contexts/CourseContext";
import RegisteredCoursesContext from "../Contexts/RegistreredCourses";

export default function Registrera() {

    //UseStates
  const [courseTitle, setCourseTitle] = useState("");


    //Kurskontext
  const courses = useContext(courseContext);
  const { registerCourse, isCourseRegistered } = useContext(RegisteredCoursesContext);


  //Hämta kurstitel
  const handleChange = (event) => {
    setCourseTitle(event.target.value);
  };

  //Hantera registrering och spara i lista
  const handleRegister = () => {
    const selectedCourse = courses.find((c) => c.id === courseTitle);
    if (selectedCourse && !isCourseRegistered(selectedCourse.id)) {
      registerCourse(selectedCourse);
    }
  };

  const showAlert = isCourseRegistered(courseTitle);



  return (
    <>


      <Container maxWidth="sm" style={{ marginTop: "40px" }}>
        <h1 style={{ marginTop: "40px", marginBottom: '30px' }}>
        Registrera dig här!
      </h1>
        <Stack spacing={2} direction="column">
          <FormControl fullWidth>
            <InputLabel id="Kursnamn">Kursnamn</InputLabel>
            <Select
              value={courseTitle}
              onChange={handleChange}
              label="Kursnamn"
            >
              {courses.map((course) => (
                <MenuItem key={course.id} value={course.id}>
                  {course.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField id="outlined" label="Namn" defaultValue="" />
          <TextField id="outlined" label="E-mail" defaultValue="" />

          <Button variant="contained" onClick={handleRegister}>
            Registrera
          </Button>
          {showAlert && (
              <Alert severity="success">Kursen är registrerad.</Alert>
          )}
        </Stack>
      </Container>
    </>
  );
}
