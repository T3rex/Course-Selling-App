import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button'; 
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import userState from '../stores/atoms/user';
import { useNavigate } from "react-router-dom";






function Signin(){
    const setUser = useSetRecoilState(userState);
    const [usernameInp,setUsernameInp] = useState("");
    const [pass,setPass] = useState("");
    const navigate = useNavigate();


    function handleClick(username,pass){
        fetch('http://localhost:3000/admin/login',{
            method: 'POST',
            headers:{
                "username" : username,
                'password' : pass
            }
        }).then(response => response.json())
        .then(data =>{
            console.log(data);
            localStorage.setItem('token',data.token);   
            setUser({
                isLoading : false,
                username: username
            });
            navigate("/admin/courses")
        })
    }

    return (
        <center>
            <Card style={{width:300 , marginTop: 100, padding:100}} >        
                <div>
                     <Typography variant="p" component="div">
                     Welcome to Coursera, Please Sign in below.
                    </Typography>
                    <br/>
                    <TextField onChange={(e)=>{ setUsernameInp(e.target.value) }} fullWidth={true} id="outlined-basic" label="Email" variant="outlined" />
                    <br/>
                    <br/>
                    <TextField onChange={(e)=>{ setPass(e.target.value) }} fullWidth={true} type='password' label="Password" variant="outlined" />
                    <br/>
                    <br/>
                    <Button onClick={()=>{handleClick(usernameInp,pass)}} size={"large"} variant="contained">Sign in</Button>
                    <br/>
                    <br/>
                </div>
            </Card>
        </center>
    )
 }

 export default Signin;