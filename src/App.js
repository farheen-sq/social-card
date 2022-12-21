import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, Routes} from "react-router"
import Search from './pages/search';
import Home from './pages/home';
import Profile from './pages/profile';

function App() {
  return (
    <div className='container'>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/:username" element={<Profile/>} />
        </Routes>
    </div>
  );
}

export default App;
