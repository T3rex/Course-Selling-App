import {useState,useEffect} from 'react';
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
            setCourses(data.courses);         
        });
    },[])

    return(
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                {courses.map((course) =>{
                    return <Course course={course} key={course._id}/>
                })}
            </div>
            
    )
}

const Course = (props)=>{
    return(<div>
                <Card style={{width:200 , marginTop: 50, padding:10, display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} >      
                
                     <Typography variant="p" component="div">
                      {props.course.title}
                    </Typography>
                    <br/>
                    <Typography variant="p" component="div">
                      {props.course.description}
                    </Typography>
                    <br/>
                   
                    <Typography variant="p" component="div">
                      {props.course.price}
                    </Typography>
                    <br/> 
                    <Typography variant="p" component="div">
                      {props.course.imageLink}
                    </Typography>   
                    <Link to={'/admin/courses/' + props.course._id}><Button size={"small"} variant="contained">Edit</Button></Link> 
                
            </Card>
       
        
    </div>)
}

export default Courses;