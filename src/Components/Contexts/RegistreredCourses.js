import { createContext, useState } from "react";

const RegisteredCoursesContext = createContext();


export const RegisteredCoursesProvider = ({children}) => {
    const [registeredCourses, setRegisteredCourses] = useState([]);

    const registerCourse = (course) => {
        if (!registeredCourses.includes(course)){
            setRegisteredCourses([...registeredCourses,course]);
        }
    };

    const isCourseRegistered = (courseId) => {
        return registeredCourses.some((c) => c.id === courseId);
    }

    return (
        <RegisteredCoursesContext.Provider value={{registeredCourses, registerCourse, isCourseRegistered}}>
            {children}
        </RegisteredCoursesContext.Provider>
    )
}

export default RegisteredCoursesContext;