import logo from './logo.svg';
import {Route,Routes} from 'react-router-dom'
import './App.css';
import { Home } from './components/Home';
import Chats from './components/Chats';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import Post from './components/Post';
import InfoPage from './components/InfoPage';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/addpost' element={<Post/>}></Route>
      <Route path='/chats' element={<Chats/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/info' element={<InfoPage/>}></Route>
      <Route path='/userprofile/:id' element={<UserProfile/>}></Route>
    </Routes>
    </div>
  );
}

export default App;