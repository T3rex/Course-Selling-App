import Card from '@mui/material/Card';
import Button from '@mui/material/Button'; 
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const CourseCard = (props)=>{
    return(<div>
                <Card style={{width:200 , marginTop: 50, padding:10, display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} >      
                
                     <Typography variant="p" component="div">
                      {props.course.title}
                    </Typography>
                    <br/>
                    <Typography variant="p" component="div">
                      {props.course.description}
                    </Typography>
                    <br/>
                   
                    <Typography variant="p" component="div">
                      {props.course.price}
                    </Typography>
                    <br/> 
                    <Typography variant="p" component="div">
                      {props.course.imageLink}
                    </Typography>   
                    <Link to={'/admin/courses/' + props.course._id}><Button size={"small"} variant="contained">Edit</Button></Link> 
                
            </Card>
       
        
    </div>)
}

export default CourseCard;