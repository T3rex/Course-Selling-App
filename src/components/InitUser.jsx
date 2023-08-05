import userState from "../stores/atoms/user";
import {useSetRecoilState} from 'recoil';
import { useEffect } from "react";
import axios from 'axios';


const InitUser = () =>{
    const setUser = useSetRecoilState(userState);
    const init =async()=>{
        try{
            const response = await axios.get("http://localhost:3000/admin/me",{
                headers: {
                    "Authorization": "Bearer " + localStorage?.getItem("token")
                }
            });
            console.log(response.data.user.username);
          
            if(response.data.user.username){
                setUser({
                    isLoading: false,
                    username: response.data.user.username
                })

            }else{
                setUser({
                    isLoading: false,
                    username: null
                })
            }
        }
        catch(e){            
            setUser({
                isLoading: false,
                username :null
            })
        }  
    } 

    useEffect(()=>{
        init();
    },[]);     
    return <></>
}

export default InitUser;

