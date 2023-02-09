import './App.css';
import CardComponent from './components/cardComponent/CardComponent';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import {
  BrowserRouter ,
Routes,
Route,
Link
} from 'react-router-dom';
import Register from './pages/register/Register';
import { useContext } from "react";
import { Context } from "./context/Context";
import TopBar from './components/topbar/TopBar';

function App() {
  const { user } = useContext(Context);
  // console.log('user',user)
  return (
    <BrowserRouter basename='/'>
      <TopBar />
      <Routes>
      <Route exact path="/" element={user ? <Home/> : <Login /> } />
      <Route  path="/register" element={user ? <Home/> : <Register/>} />
      <Route path="/login" element={ user ? <Home/> : <Login/>} />    
      </Routes>
     
      
    </BrowserRouter>
  );
}

export default App;
