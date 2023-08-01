import { useEffect,useState } from "react"
import { useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button'; 
import Typography from '@mui/material/Typography';

function handleClick(title,desc,courseId) {
      
    fetch('http://localhost:3000/admin/courses/'+ courseId,{
        method: 'PUT',
        headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ localStorage.getItem('token')
                },
        body: JSON.stringify({
            title: title,
            desc: desc,
        })        
    }).then(response => response.json())
    .then(data => console.log(data));  
  
}


const Course =()=>{

    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");

    const {courseId} = useParams();
    useEffect(()=>{
        fetch('http://localhost:3000/admin/courses/'+ courseId,{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ localStorage.getItem('token')
            }
        }).then(response => response.json())
        .then(data => {
            setTitle(data.course.title);
            setDesc(data.course.desc);
        });
    },[])

    return(<>
     <center>
            <Card style={{width:300 , marginTop: 100, padding:100}} >        
                <div>
                     <Typography variant="p" component="div">
                    Change Course Details
                    </Typography>
                    <br/>
                    <TextField  onChange={(e)=>{
                       
                        setTitle(e.target.value);
                    }}
                    fullWidth={true} 
                    type='text' 
                    label="Title" 
                    value= {title}
                    variant="outlined" />
                    <br/>
                    <br/>
                    <TextField onChange={(e)=>{                        
                        setDesc(e.target.value);
                    }} value = {desc} fullWidth={true} label="Description" variant="outlined" />
                    <br/>
                    <br/>
                    <Button onClick={()=> handleClick(title,desc,courseId)} size={"large"} variant="contained">Add course</Button>
                    <br/>
                    <br/>
                </div>
            </Card>
        </center>   
    </>)
}

export default Course;