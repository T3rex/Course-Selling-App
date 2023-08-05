import { useEffect,useState } from "react"
import { useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button'; 
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useRecoilValue, useSetRecoilState,useRecoilState } from "recoil";
import courseState from "../stores/atoms/course";
import { isCourseLoading,courseTitleState,courseDescState, coursePriceState, courseImgLinkState } from "../stores/selectors/courseState";


const CourseUpdate =()=>{

    const courseId = useParams();
    const courseLoading = useRecoilValue(isCourseLoading);
    const setCourse = useSetRecoilState(courseState);    
    useEffect(()=>{
       const getCourse = async () =>{
            const response = await axios.get('http://localhost:3000/admin/courses/'+ courseId.courseId,
                            {                                
                                headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json',
                                        'Authorization': 'Bearer '+ localStorage.getItem('token')
                                        },                                      
                            } )
            
            setCourse({isLoading:false,course: response.data.course});
        }
        getCourse();
    },[])
    if(courseLoading){
        return <>Loading...</>
    }
    return( 
        <div>
            <Banner/>
            <div style={{display:'flex', justifyContent:'space-evenly' }}>
                <UpdateCard/>
                <CourseCard/>
            </div>
        </div>
    )
}

const Banner =()=>{
    const courseTitle = useRecoilValue(courseTitleState);
    return (
        <div>{courseTitle}</div>
    )
}


const UpdateCard =()=>{
    
    const courseId = useParams();
    const [courseDetails,setCourse] = useRecoilState(courseState);    
    const [title,setTitle] = useState(courseDetails.course.title);
    const [desc,setDesc] = useState(courseDetails.course.description);
    const [price,setPrice] = useState(courseDetails.course.price);
    const [imgLink,setImgLink] = useState(courseDetails.course.imageLink);
    
    function handleClick(title,desc,price,imgLink,courseId) {       
        const updateCourse = async () =>{           
           const res= await axios.put('http://localhost:3000/admin/courses/'+ courseId.courseId,{
            title: title,
            description: desc,
            price: price,
            imageLink: imgLink,
            publish: true
           },
            {                           
                headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer '+ localStorage.getItem('token')
                        },                                      
                        
            } )
            const updateCourse = {
                _id: courseDetails.course._id,
                title: title,
                description: desc,
                price: price,
                imageLink: imgLink,
                publish: true
            }
            setCourse({isLoading:false,course:updateCourse});
        }
        updateCourse();
    }
 
    return(<>
     <center>
            <Card style={{width:200, height:300 , marginTop: 50,marginBottom:50, padding:100}} >        
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
                    <Button onClick={()=> handleClick(title,desc,price,imgLink,courseId)} size={"large"} variant="contained">Edit course</Button>
                    <br/>
                    <br/>
                </div>
            </Card>
        </center>   
    </>)
}

const CourseCard =() =>{

    const courseTitle = useRecoilValue(courseTitleState);
    const courseDesc = useRecoilValue(courseDescState);   
    const coursePrice = useRecoilValue(coursePriceState); 
    const courseImg = useRecoilValue(courseImgLinkState)  

     return (
        <Card style={{width:200, height:300 , marginTop: 50,marginBottom:50, padding:100}} >        
                <div>
                     <Typography variant="p" component="div">
                        {courseTitle}
                    </Typography>
                    <br/>
                    <Typography variant="p" component="div">
                        {courseDesc}
                    </Typography>
                    <br/>
                    <Typography variant="p" component="div">
                        {coursePrice}
                    </Typography>
                    <br/>
                    <Typography variant="p" component="div">
                        {courseImg}
                    </Typography>
                    <br/>
                    
                </div>
            </Card>
     )
}


export default CourseUpdate;