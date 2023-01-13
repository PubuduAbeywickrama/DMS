import NavBar from './component/navbar';
import './App.css';
import Login from './component/login';
import Register from './component/register';
import SignInOutContainer from './containers/SignInOutContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './component/home';
import DashBoard from './containers/dashboard.js';

function App() {
  return (
    <div className="App">
        
        
        
    
        <BrowserRouter>
        
        
        <Routes>
            <Route path="/" element={<Home></Home>}/>
            <Route path="/LoginRegister" element={<SignInOutContainer/>}/>
            <Route path="/dashboard" element={<DashBoard/>}/>
        </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
