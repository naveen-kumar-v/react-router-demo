import { Route, Routes } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';

import NavBar from './components/NavBar';

import HomePage from './pages/HomePage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div>
      <div><Toaster
        position="bottom-center"
        reverseOrder={false} />
      </div>

      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
