
import './App.css';
import {BrowserRouter,Routes,Route,path} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import Bookingscreen from './screens/Bookingscreen';
import Registerscreen from './screens/Registerscreen'
import Loginscreen from './screens/Loginscreen';
import Adminscreen from './screens/Adminscreen';
//import ProtectedRoute from './components/ProtectedRoute';


function App() {
  
  return (
    <div className="App">
     <Navbar/>
      <BrowserRouter>
      <Routes>
      
      
      <Route path="/register" element={<Registerscreen/>}/>
      <Route path="/login" element={<Loginscreen/>}/>
    
            <Route path="/home" element={<Homescreen />} />
            <Route path="/book/:roomid" element={<Bookingscreen />} />
            <Route path="/admin" element={<Adminscreen />} />
          
     
      </Routes>
      </BrowserRouter>
    
        
    </div>
  );
}

export default App;