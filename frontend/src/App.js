import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './tabs/login.tsx';
import Signup from './tabs/signup.tsx';
import Dashboard from './tabs/dashboard.tsx';
import Guideline from './tabs/guideline.tsx';
import AddIoT from './tabs/addIoT.tsx';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/guideline" element={<Guideline />} />
                    <Route path="/addiot" element={<AddIoT />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
