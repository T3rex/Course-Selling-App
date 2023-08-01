import Button from '@mui/material/Button'; 
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';
import { useEffect,useState } from 'react';


function Appbar(){

    const [userEmail, setUserEmail] = useState(null);

    useEffect(()=>{
        
        if(localStorage.getItem('token') != null){
            fetch("http://localhost:3000/admin/me",{
            method:"GET",
            headers: {
                "Authorization": "Bearer " + localStorage?.getItem("token")
            }
            }).then(response => response.json()).then(data => {
                if(data){
                    console.log();
                    setUserEmail(data.username.username);
                }
            });
        }        
    },[])

    return (
    <div style={{display:"flex", justifyContent:"space-between", padding:10}}>
        <div>
        <Typography>Coursera</Typography>
        </div>
        <div>      
            { !userEmail ? 
            <><Link to="/signup"><Button style={{marginRight:10}} size={"medium"} variant="contained">Sign up</Button></Link>
            <Link to="/login"><Button size={"medium"} variant="contained">Sign in</Button></Link></> :<> <h5>{userEmail} </h5>
            <Button onClick={()=>{localStorage.setItem('token',null); setUserEmail(null)}} size={"medium"} variant="contained">LogOut</Button></>
            }
        </div>
    </div>)
}

export default Appbar;