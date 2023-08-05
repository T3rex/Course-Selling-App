import Appbar from './components/Appbar';
import {Outlet} from 'react-router-dom'
import {RecoilRoot} from 'recoil';
import InitUser from './components/InitUser';


function App() {
  
  return (    
    <div style={{width: "100vw", height: "100%", backgroundColor: "#eeeeee", }}>
       <RecoilRoot>
          <Appbar/>
          <InitUser/>
          <Outlet/>  
       </RecoilRoot>
    </div>    
  )
}
export default App;
