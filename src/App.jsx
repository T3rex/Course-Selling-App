import Signup from './components/Signup'
import Signin from './components/Signin'
import Appbar from './components/Appbar';
import {Outlet} from 'react-router-dom'


function App() {
  
  return (    
    <div style={{width: "100vw", height: "100vh", backgroundColor: "#eeeeee", }}>
    <Appbar></Appbar>
    <Outlet/>  
    </div>    
  )
}
export default App;
