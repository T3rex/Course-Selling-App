import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button'; 
import Typography from '@mui/material/Typography';
import { useState } from 'react';


function handleClick(username,pass){
    fetch('http://localhost:3000/admin/login',{
        method: 'POST',
        headers:{
            "username" : username,
            'password' : pass
        }
    }).then(response => response.json())
    .then(data =>{
        localStorage.setItem('token',data.token);        
    })
}

 
 
 function Signup(){

    const [username,setUsername] = useState("");
    const [pass,setPass] = useState("");

    return (
        <center>
            <Card style={{width:300 , marginTop: 100, padding:100}} >        
                <div>
                     <Typography variant="p" component="div">
                     Welcome to Coursera, Please Sign in below.
                    </Typography>
                    <br/>
                    <TextField onChange={(e)=>{ setUsername(e.target.value) }} fullWidth={true} id="outlined-basic" label="Email" variant="outlined" />
                    <br/>
                    <br/>
                    <TextField onChange={(e)=>{ setPass(e.target.value) }} fullWidth={true} id="outlined-basic" label="Password" variant="outlined" />
                    <br/>
                    <br/>
                    <Button onClick={()=>{handleClick(username,pass)}} size={"large"} variant="contained">Sign in</Button>
                    <br/>
                    <br/>
                </div>
            </Card>
        </center>
    )
 }

 export default Signup;