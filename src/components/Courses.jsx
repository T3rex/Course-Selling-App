import {useState,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button'; 
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

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
            console.log(data)
            setCourses(data.courses)
        });
    },[])

    return(<div style={{display: 'flex'}}>
            {courses.map((course) =>{
                return <Link to={'/admin/courses/'+course.id} key={course.id}><Course course={course} /></Link> 
            })}
    </div>)
}

const Course = (props)=>{
    return(<div>
                <Card style={{width:200 , marginTop: 50, padding:10}} >        
                <div>
                     <Typography variant="p" component="div">
                      {props.course.title}
                    </Typography>
                    <br/>
                    <Typography variant="p" component="div">
                      {props.course.desc}
                    </Typography>
                    <br/>
                    <br/>                    
                </div>
            </Card>
       
        
    </div>)
}

export default Courses;