import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Startsida from './Components/Pages/Startsida';
import ErrorPage from './Components/Pages/ErrorPage';
import Kurser from './Components/Pages/Kurser';
import Nyheter from './Components/Pages/Nyheter';
import Registrera from './Components/Pages/Registrera';
import KursDetaljer from './Components/Pages/KursDetaljer';
import { CourseProvider } from "./Components/Contexts/CourseContext";
import { NewsProvider } from './Components/Contexts/NewsContext';
import { RegisteredCoursesProvider } from './Components/Contexts/RegistreredCourses';

const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  errorElement: <ErrorPage/>,
  children:[
      {
    path: '/',
    element: <Startsida/>
  },
    {
    path: 'kurser',
    element: <Kurser/>,
  },
  {
    path: 'nyheter',
    element: <Nyheter/>,
  },
      {
    path: 'registrera',
    element: <Registrera/>,
  },
  {
    path: 'kursdetaljer/:courseId',
    element: <KursDetaljer/>
  }
]

}]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CourseProvider>
      <NewsProvider>
        <RegisteredCoursesProvider>
    <RouterProvider router={router}/>
    </RegisteredCoursesProvider>
    </NewsProvider>
    </CourseProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
