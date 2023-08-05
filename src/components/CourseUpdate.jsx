import { useEffect,useState } from "react"
import { useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button'; 
import Typography from '@mui/material/Typography';
import axios from 'axios';


const CourseUpdate =()=>{
    
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [price,setPrice] = useState("");
    const [imgLink,setImgLink] = useState("");
    const {courseId} = useParams();
    
    function handleClick(title,desc,price,imgLink,courseId) {

        const updateCourse = async () =>{
            await axios.put('http://localhost:3000/admin/courses/'+ courseId,
                {                                
                    headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer '+ localStorage.getItem('token')
                            },
                    body: JSON.stringify({
                        title: title,
                        description: desc,
                        price:price,
                        imageLink : imgLink,
                    })        
                } )
        
        }
        updateCourse();
    }
    useEffect(()=>{
       const getCourse = async () =>{
            const response = await axios.get('http://localhost:3000/admin/courses/'+ courseId,
                            {                                
                                headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json',
                                        'Authorization': 'Bearer '+ localStorage.getItem('token')
                                        },                                      
                            } )
            setTitle(response.data.course.title)
            setDesc(response.data.course.description)
            setPrice(response.data.course.price)
            setImgLink(response.data.course.imageLink)
        }
        getCourse();
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
                    <TextField  onChange={(e)=>{
                       
                        setImgLink(e.target.value);
                    }}
                    fullWidth={true} 
                    type='text' 
                    label="Image Link" 
                    value= {imgLink}
                    variant="outlined" />
                    <br/>
                    <br/>
                    <TextField  onChange={(e)=>{
                       
                        setPrice(e.target.value);
                    }}
                    fullWidth={true} 
                    type='text' 
                    label="Price" 
                    value= {price}
                    variant="outlined" />
                    <br/>
                    <br/>
                    <Button onClick={()=> handleClick(title,desc,price,imgLink,courseId)} size={"large"} variant="contained">Add course</Button>
                    <br/>
                    <br/>
                </div>
            </Card>
        </center>   
    </>)
}

export default CourseUpdate;