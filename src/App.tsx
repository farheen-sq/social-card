import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, Routes} from "react-router"
import Search from './pages/search';
import Home from './pages/home';
import Profile from './pages/profile';
import React from 'react';
import { ROUTES } from './constants';

function App() {
  return (
    <div className='container'>
        <Navbar></Navbar>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home/>} />
          <Route path={ROUTES.SEARCH} element={<Search/>} />
          <Route path={ROUTES.PROFILE} element={<Profile/>} />
        </Routes>
    </div>
  );
}

export default App;
