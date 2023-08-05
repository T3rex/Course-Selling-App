import {useState,useEffect} from 'react';
import CourseCard from './CourseCard';


const Courses= () =>{
     const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/admin/courses',{
            method: 'GET',
            headers:{
                'Authorization': 'Bearer '+ localStorage.getItem('token')
            }
        })
        .then(resposne => resposne.json())
        .then(data => {            
            setCourses(data.courses);         
        });
    },[])

    return(
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                {courses.map((course) =>{
                    return <CourseCard course={course} key={course._id}/>
                })}
            </div>
            
    )
}


export default Courses;