
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button'; 
import Typography from '@mui/material/Typography';
import { useState } from 'react';


function handleClick(title,desc) {
  
    fetch('http://localhost:3000/admin/courses',{
        method: 'POST',
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
 
 
 function AddCourse(){

    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");



    return (
        <center>
            <Card style={{width:300 , marginTop: 100, padding:100}} >        
                <div>
                     <Typography variant="p" component="div">
                    Enter Course Details
                    </Typography>
                    <br/>
                    <TextField  onChange={(e)=>{
                        setTitle(e.target.value);
                    }}
                    fullWidth={true} 
                    type='text' 
                    label="Title" 
                    variant="outlined" />
                    <br/>
                    <br/>
                    <TextField onChange={(e)=>{
                        setDesc(e.target.value);
                    }} fullWidth={true} label="Description" variant="outlined" />
                    <br/>
                    <br/>
                    <Button onClick={()=> handleClick(title,desc)} size={"large"} variant="contained">Add course</Button>
                    <br/>
                    <br/>
                </div>
            </Card>
        </center>
    )
 }

 export default AddCourse;