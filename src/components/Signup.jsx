import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button'; 
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import userState from '../stores/atoms/user';
import { useSetRecoilState } from 'recoil';




function Signup(){
    
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const setUser = useSetRecoilState(userState);
    
    function handleClick(username,password) {
        fetch('http://localhost:3000/admin/signup',{
            method: 'POST',
            headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    },
            body: JSON.stringify({
                username: username,
                password: password,
            })        
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            localStorage.setItem('token',data.token)
            setUser({isLoading:false,username:username});
        });  
    }


    return (
        <center>
            <Card style={{width:300 , marginTop: 100, padding:100}} >        
                <div>
                     <Typography variant="p" component="div">
                     Welcome to Coursera, Please Sign up below.
                    </Typography>
                    <br/>
                    <TextField  onChange={(e)=>{
                        setUsername(e.target.value);
                    }}
                    fullWidth={true} 
                    type='email' 
                    label="Email" 
                    variant="outlined" />
                    <br/>
                    <br/>
                    <TextField onChange={(e)=>{
                        setPassword(e.target.value);
                    }} fullWidth={true} label="Password" variant="outlined" />
                    <br/>
                    <br/>
                    <Button onClick={()=> handleClick(username,password)} size={"large"} variant="contained">Sign up</Button>
                    <br/>
                    <br/>
                </div>
            </Card>
        </center>
    )
 }

 export default Signup;