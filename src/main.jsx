import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Signup from './components/Signup.jsx'
import Signin from './components/Signin.jsx'
import AddCourse from './components/AddCourse.jsx'
import Courses from './components/Courses.jsx'
import CourseUpdate from './components/CourseUpdate.jsx'


  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <App/>,
      children:[
        {
          path: '/',
          element :<Signup/> 
        },
        {
          path: '/signup',
          element :<Signup/> 
        },
        {
        path: '/login',
          element :<Signin/>  
        },
        {
        path: '/addcourse',
          element :<AddCourse/>  
        },
         {
        path: '/admin/courses',
          element :<Courses />  
        },
        {
        path: '/admin/courses/:courseId',
          element :<CourseUpdate/>  
        }
      ]
    },
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>,
)
