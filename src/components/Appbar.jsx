import Button from '@mui/material/Button'; 
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';
import {useRecoilValue,useSetRecoilState} from 'recoil';
import userState from '../stores/atoms/user';
import usernameState from '../stores/selectors/usernameState';
import isLoadingState from '../stores/selectors/isLoadingState';
import { useNavigate } from 'react-router-dom';

function Appbar(){

    const useNav = useNavigate();
    const isLoading = useRecoilValue(isLoadingState);
    const username = useRecoilValue(usernameState);
    const setUser = useSetRecoilState(userState);


    if(isLoading==true){
        return <>Loading...</>
    }
    else{
        return (
            <div style={{display:"flex", justifyContent:'space-between', padding:30}}>
            <div>
            <Typography>Coursera</Typography>
            </div>
            <div>      
                { !username ? 
                <><Link to="/signup"><Button style={{marginRight:10}} size={"medium"} variant="contained">Sign up</Button></Link>
                <Link to="/login"><Button size={"medium"} variant="contained">Sign in</Button></Link></> :
                <div style={{display:'flex',width:150}}> <h5>{username} </h5>
                <Button style={{height:50, marginLeft:15}} onClick={()=>{localStorage.setItem('token',null); setUser({isLoading:false, username:null}); useNav('/login')}} size={"small"} variant="contained">LogOut</Button></div>
                }
            </div>
        </div>)

    }
}

export default Appbar;