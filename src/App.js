import './App.css';
import "./Components/style.css";
import NavBar from './Components/NavBar';
import Property from './Components/Property';
import AddProperty from './Components/AddProperty';
import Board from './Components/Board';
import Forum from './Components/Forum';
import Statistic from './Components/Statistic';
import About from './Components/About';
import Home from './Components/Home';
import Help from './Components/Help';
import Chat  from './Components/chat/Chat';
import Call from './Components/Call';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Profile from './Components/icons/Profile';
import CardProp from './Components/icons/CardProp';
import { Card } from '@mui/material';
import Changeimg from './Components/icons/ChangeImg';
import Collage from './Components/icons/Collage';
import Register from './Components/Register';
import Login from './Components/Login';
import MyProfile from './Components/icons/MyProfile';
import Exit from './Components/Exit';
import { useSelector } from 'react-redux';
import Form from './Components/AddProp/Form'

// import ChatF from './Components/ChatF';
function App() {
  const selectUser = useSelector(state => state.user.selectedUser);//שליפה של המשתמש הנוכחי שהתחבר
 
 
  return (
  <div className="App">
    {selectUser!=null &&<Profile/>}
     <NavBar/>
     <Routes>
     {/* <ChatF/> */}
     {/* index-
     localhost:3000 כאשר אין ניתוב
      תציג את הדירות */}
      
<Route index element={<Property/>}/>
<Route path="property" element={<Property/>}/>
<Route path="addProp" element={<Form/>}/>
<Route path="board" element={<Board/>}/>
<Route path="forum" element={<Forum/>}/>
<Route path="statistic" element={<Statistic/>}/>
<Route path="help" element={<Help/>}/>
<Route path="about" element={<About/>}/>
<Route path="chat/:id"  element={<Chat />} />
<Route path="login" element={<Login/>}/>
<Route path="register" element={<Register/>}/>
<Route path="myprofile" element={<MyProfile/>}/>
<Route path="exit" element={<Exit/>}/>
</Routes>
{/* <Collage/> */}


  </div>
  );
}

export default App;
